var Network = require('../Network');

exports.addInvitation = function(toUsername) {
  console.log('addinvitation from Actions being called with: ', toUsername);
  return function(dispatch) {
    return Network.inviteUser(toUsername)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(addInvitationSuccess(body));
            } else {
              return dispatch(addInvitationFailure(body));
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };
};

function addInvitationSuccess(data) {
  return {
    type: 'ADD_INVITATION_SUCCESS',
    payload: data.invitations,
  };
}

function addInvitationFailure() {
  return {
    type: 'ADD_INVITATION_FAILURE',
  };
}

// JOIN_HOUSEHOLD
exports.updateInvitation = function(status, invitationId) {
  return function(dispatch) {
    return Network.respondToInvitation(status, invitationId)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(updateInvitationSuccess(body));
            } else {
              return dispatch(updateInvitationFailure(body));
            }
          });
      })
      .catch(function(error) {
        console.log(error);
        return dispatch(updateInvitationFailure(error.message));
      });
  };
};

// UPDATE_INVITATION_SUCCESS
function updateInvitationSuccess(data) {
  console.log('updateInvitationSuccess action being created');
  return {
    type: 'UPDATE_INVITATION_SUCCESS',
    payload: {
      invitations: data.invitations,
      household: data.household || null,
      token: data.token,
    },
  };
}

// UPDATE_INVITATION_FAILURE
function updateInvitationFailure(message) {
  return {
    type: 'UPDATE_INVITATION_FAILURE',
    payload: {message},
    error: true,
  };
}
