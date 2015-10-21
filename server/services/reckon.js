var db = require('../db/interface');

var reckon = function(householdId) {

  if (typeof householdId !== 'number') {
    householdId = parseInt(householdId, 10);
    if (isNaN(householdId)) {
      return Promise.reject(new TypeError('householdId cannot be parsed to int'));
    }
  }

  return db.Household.findById(householdId, {
    // Eagerly load some of the associated data
    // that we'll use to calculate the details of
    // the reckoning and its join table.
    include: [
      // Include the users holding a foreign key to the household.
      {
        model: db.User,
      },
      // Also include all the items associated with the household...
      {
        model: db.Item,
        // ... where there is no associated reckoning yet...
        where: {reckoningId: null},
        // ... and include the users who bought the item.
        include: [
          {
            model: db.User,
            as: 'buyingUser',
            // `required` causes an inner join.
            // We want to exclude any items that haven't been bought.
            required: true,
          },
        ],
      },

    ],
  })

    .then(function(household) {
      if (!household) {
        throw new Error('Nothing to reckon.');
      }
      // Next, compute the sum of the items we're going to reckon.
      var sum = household.items.reduce(function(sum, item) {
        // Second operator is unary to cast from string -> number.
        // `pg` module returns DECIMAL and FLOAT columns as strings
        // since JavaScript floats can be unreliable.
        return sum + +item.price;
      }, 0);

      // Pass out the household model and the sum.
      // We'll need both to generate the reckoning down the pipe.
      return {household, sum};

    })

    .then(function(results) {
      // Grab some aliases to save on typing.
      var household = results.household;
      var totalSpent = results.sum;

      // Alias our number of users.
      var userCount = household.users.length;

      // Simple calculation of each user's even share
      // of total costs.
      var share = totalSpent / userCount;

      // Use a reduce to prepare the attributes for insertion into
      // the join table against the reckoning. `contribution` and `debt`
      // are columns to be stored on the join table.
      var userStats = household.users.reduce(function(collection, user) {
        // Key the collection object by user's id, to coordinate with
        // each item's `buyingUserId` column.
        collection[user.id] = {user, contribution: 0, debt: share};
        return collection;
      }, {});

      // Next, we need to parse the items contained in the reckoning
      // and apportion the contribution to the right user.
      // Debt is a simple function of price, share, and contribution,
      // but share is not stored anywhere else in the reckoning data,
      // and debt is a convenient implicit record of share and relative
      // contribution.
      household.items.forEach(function(item) {
        var user = userStats[item.buyingUserId];
        // Here, we use a unary again to cast string -> number.
        user.contribution += +item.price;
        user.debt -= +item.price;
      });

      // We now have the information we need to build the reckoning model.
      // The only field we pass in directly is the totalSpent.
      return db.Reckoning.create({totalSpent})
        .then(function(reckoning) {
          // Next, we associate with the household.
          // The `household` identifier is the alias declared at
          // the top of our enclosing scope, from `results.household`.
          return reckoning
            .setHousehold(household)
            .then(function() {
              // After household is set, we need to associate the reckoning
              // with the appropriate users, as well as store the related
              // monetary figures as columns in the join table.
              // Since adding an association is an asynchronous operation and
              // returns a promise, yet we want to wait for many of these
              // operations to finish before control continues down the pipe,
              // we build an array of promises and pass it to a Promise.all.

              // `u` is a simple alias for compactness below.
              // I confess to laziness.
              // `userStats` is drawn from enclosing scope.
              var u = userStats;
              var promises = [];
              var i;

              // For each key in `userStats`, which are themselves
              // userIds, we pass the stored reference to the user model
              // to the reckoning's `addUser`. The second argument is
              // an object of attributes to be set on the join table.
              // This is a specific signature of n:m associations in Sequelize.
              // `addUser` returns a promise, which we immediately push to our
              // array of promises.
              for (i in u) {
                promises.push(reckoning.addUser(u[i].user, {contribution: u[i].contribution, debt: u[i].debt}));
              }

              // Wait upon all of the promises in the array,
              // then resolve our entire chain to the reckoning model,
              // which now has all of its associations and is
              // ready for action.
              return Promise.all(promises)
                      .then(function() {
                        return reckoning;
                      });
            });
        });

    })

    .catch(function(err) {
      if (err.message === 'Nothing to reckon.') {
        return null;
      } else {
        throw err;
      }
    });

};

module.exports = reckon;
