var router = require('express').Router();

var db = require('../db/interface');
var tokens = require('../services/tokens');

router.post('/', function(request, response) {

  var fromUserId = request.decoded.userId;
  var householdId = request.decoded.householdId;

  if (!householdId) {
    return response.status(400).send('No household saved in token');
  }

  db.User.findOne({where: {username: request.body.toUsername}})

    .then(function(toUser) {
      if (!toUser) {
        return response.status(404).send('User does not exist');
      }

      db.Household.findOne({where: {id: householdId}})
        .then(function(household) {
          return db.Invitation.create({toUserId: toUser.id, fromUserId, householdId, householdName: household.name})
            .then(function() {
              return db.Invitation.findAll({where: {fromUserId, status: 'pending'}})
                .then(function(invitations) {
                  response.status(201).json({invitations});
                });
            });
        });

    })

    .catch(function(error) {
      response.status(500).send(error);
    });

});

router.get('/inbox', function(request, response) {

  var userId = request.decoded.userId;

  db.Invitation.findAll({where: {toUserId: userId}})

    .then(function(invitations) {
      //also send back household id names
      response.json({invitations});
    })

    .catch(function(error) {
      console.error(error);
      response.status(500).send(error);
    });

});


// {include: [{model: User, where: {id: toUserId}}]}

router.get('/outbox', function(request, response) {
  var userId = request.decoded.userId;

  db.Invitation.findAll({where: {fromUserId: userId}})

    .then(function(invitations) {
      response.json({invitations});
    })

    .catch(function(error) {
      console.error(error);
      response.status(500).send(error);
    });

});

router.put('/:invitationId', function(request, response) {
  var userId = request.decoded.userId;
  var invitationId = request.params.invitationId;
  var status = request.body.status;

  db.Invitation.findOne({where: {id: invitationId}})
    .then(function() {
      if (status === 'accepted' || status === 'rejected') {
        db.Invitation.update(request.body, {where: {id: invitationId}, returning: true})
          .then(function(invitationArray) {
            if (status === 'accepted') {
              db.User.update({householdId: invitationArray[1][0].householdId}, {where: {id: userId}})
                .then(function() {
                  db.Household.findOne({where: {id: invitationArray[1][0].householdId}})
                    .then(function(household) {
                      db.Invitation.findAll({where: {toUserId: userId, status: 'pending'}})
                        .then(function(invitations) {
                          db.User.findAll({where: {householdId: household.id}, attributes: ['username', 'id']})
                            .then(function(roommates) {
                              return response.status(200).json({
                                token: tokens.issue(userId, invitationArray[1][0].householdId),
                                household,
                                roommates,
                                invitations,
                              });
                            });
                        });
                    });
                });

            } else {
              db.Invitation.findAll({where: {toUserId: userId, status: 'pending'}})
                .then(function(invitations) {
                  response.status(200).json({
                    invitations,
                    token: tokens.issue(userId),
                  });
                });
            }
          });

      } else {
        response.status(400).send('Bad request');
      }

    })

    .catch(function(error) {
      console.error(error);
      response.status(500).send(error);
    });
});

router.route('/:invitationId')

  .delete(function(request, response) {

    db.Invitation.destroy({where: {id: request.params.invitationId}})

      .then(function() {
        response.sendStatus(200);
      })

      .catch(function(error) {
        response.status(500).send(error);
      });

  });

module.exports = router;
