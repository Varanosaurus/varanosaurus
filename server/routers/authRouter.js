var authRouter = require('express').Router();
var db = require('../db/interface');
var tokens = require('../services/tokens');

authRouter.post('/login', function(request, response) {

  db.User.findOne({where: {username: request.body.username}})
    .then(function(user) {

      var token;

      if (!user) {
       return response.status(404).send('User doesn\'t exist.');
      }

      if (user.comparePassword(request.body.password)) {
        // TODO: see if this way of checking for a set household actually works, or throws an error
        token = tokens.issue(user.id, user.getHousehold() ? user.getHousehold().id : undefined);
        return response.status(200).json(token);
      } else {
        return response.status(403).send('Wrong password.');
      }

    })

    .catch(function(error) {
      console.error(error);
      response.status(500).send(error);
    });

});

authRouter.post('/signup', function(request, response) {

  var username = request.body.username;
  var password = request.body.password;

  return db.User.findOne({where: {username}})
    .then(function(user) {
      if (user) {
        response.status(409).send('User already exists');
      } else {
        return db.User.create({
          username,
          password,
        });
      }
    })
    .then(function(user) {
      response.status(201).json({
        user: {
          username: user.username,
          id: user.id,
          updatedAt: user.updatedAt,
          createdAt: user.createdAt,
          household: user.household,
        },
        token: tokens.issue(user.id),
      });
    })
    .catch(function(error) {
      console.error(error);
      response.status(500).send('Error signing up user');
    });
});

module.exports = authRouter;
