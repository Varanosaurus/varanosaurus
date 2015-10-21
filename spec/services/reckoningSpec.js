process.env['NODE_ENV'] = 'testing';

var db = require('../../server/db/interface');
var reckon = require('../../server/services/reckon');

// Need to polyfill this in Jasmine for some reason.
// `reckon` module uses a native Promise.all with no issues.
Promise.all = require('bluebird').all;

var testHousehold =
  {
    name: '591 Dolores',
  };

var testUsers =
  [
    {
      accountName: 'redstarter',
      password: 'brewbro',
      displayName: 'Sovester',
    },
    {
      accountName: 'cynthia',
      password: 'coffeefan',
      displayName: 'Cindy',
    },
    {
      accountName: 'laura',
      password: 'guerrero',
      displayName: 'Laura',
    },
  ];

var testItems =
  [
    {
      description: 'Thing 1',
      price: 5.00,
    },
    {
      description: 'Thing 2',
      price: 5.00,
    },
    {
      description: 'Thing 3',
      price: 5.00,
    },
    {
      description: 'Thing 4',
      price: 5.00,
    },
    {
      description: 'Thing 5',
      price: 5.00,
    },
    {
      description: 'Thing 6',
      price: 5.00,
    },
  ];

describe('Reckoning service', function() {

  // DB reset
  beforeEach(function(done) {

    db.init()

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'beforeEach: DB reset'

  // DB setup
  beforeEach(function(done) {

    var self = this;

    db.Household.create(testHousehold)

      .then(function(household) {
        self.household = household;

        return Promise.all(
            testUsers.map(function(user) {
              return household.createUser(user);
            })
          );

      })

      .then(function(users) {

        return Promise
          .all(db.Item.bulkCreate(testItems, {returning: true}))
          .then(function(items) {
            return self.household.setItems(items)
              .then(function() {
                return {users, items};
              });
          });

      })

      .then(function(results) {
        var users = results.users;
        var items = results.items;

        var promises = [];
        var i;

        for (i = 0; i < items.length; i++) {
          promises.push(items[i].setBuyingUser(users[i % users.length]));
        }

        return Promise.all(promises);

      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'beforeEach: DB setup'

  it('should create a total sum', function(done) {

    reckon(this.household.id)
      .then(function(reckoning) {
        expect(reckoning).toBeTruthy();
        expect(+reckoning.totalSpent).toEqual(30);
      })
      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should create a total sum'

  it('should create a reckoning joined to users, with additional contribution and debt columns', function(done) {

    reckon(this.household.id)

      .then(function(reckoning) {
        return reckoning.getUsers();
      })

      .then(function(users) {
        var i;

        expect(users).toBeTruthy();
        expect(users.length).toEqual(3);

        for (i = 0; i < 3; i++) {
          expect(+users[i].userToReckoning.contribution).toEqual(jasmine.any(Number));
          expect(+users[i].userToReckoning.debt).toEqual(jasmine.any(Number));
        }
      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should create a reckoning joined to users, with additional contribution and debt columns'

  it('should handle negative debts', function(done) {

    var household = this.household;

    household.createItem({description: 'Thing 7', price: 200}, {returning: true})

      .then(function(item) {
        return item.setBuyingUser(1);
      })

      .then(function() {
        return reckon(household.id);
      })

      .then(function(reckoning) {
        expect(reckoning).toBeTruthy();
        expect(+reckoning.totalSpent).toEqual(230);
        return reckoning.getUsers();
      })

      .then(function(users) {
        expect(users).toBeTruthy();
      })

      .then(function() {
        return db.User.findById(1, {include: [{model: db.Reckoning}]})
          .then(function(user) {
            expect(user).toBeTruthy();
            expect(user.reckonings[0].userToReckoning).toBeTruthy();
            expect(user.reckonings[0].userToReckoning.debt).toBeLessThan(0);
          });
      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should handle negative debts'

  it('should resolve to null when there are no items to reckon', function(done) {

    db.init()
      .then(function() {
        return db.Household.create(testHousehold);
      })

      .then(function(household) {
        return Promise.all(
            testUsers.map(function(user) {
              return household.createUser(user);
            })
          )
          .then(function() {
            return household;
          });
      })

      .then(function(household) {
        return reckon(household.id);
      })

      .then(function(reckoning) {
        expect(reckoning).toBeNull();
      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should resolve to null when there are no items to reckon'

  it('should resolve to null when there are no users associated with the household', function(done) {

    db.init()
      .then(function() {
        return db.Household.create(testHousehold);
      })

      .then(function(household) {
        return db.Item.bulkCreate(testItems, {returning: true})
          .then(function(items) {
            return household.addItems(items);
          })
          .then(function() {
            return household;
          });
      })

      .then(function(household) {
        return reckon(household.id);
      })

      .then(function(reckoning) {
        expect(reckoning).toBeNull();
      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should resolve to null when there are no users associated with the household'

  it('should gracefully handle an erroneous household id', function(done) {

    reckon(123)
      .then(function(reckoning) {
        expect(reckoning).toBeNull();
      })

      .catch(done.fail.bind(done))
      .then(done);

  }); // Closes 'should gracefully handle an erroneous household id'

  it('should accept strings that can be coerced to integers', function(done) {

    reckon(this.household.id.toString())

      .then(function(reckoning) {
        expect(reckoning).toBeTruthy();
      })

      .catch(done.fail.bind())
      .then(done);

  }); // 'should accept strings that can be coerced to integers'

  it('should reject a string that can\'t be coerced to number', function(done) {

    reckon('wrong thing!!!')

      .then(done.fail.bind(done))

      .catch(function(error) {
        expect(error).toEqual(jasmine.any(TypeError));
        expect(error.message).toEqual('householdId cannot be parsed to int');
      })
      .then(done);

  }); // Closes 'should reject a string that can't be coerced to number'

}); // Closes 'Reckoning service'
