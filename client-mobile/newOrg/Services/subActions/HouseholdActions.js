var Network = require('../Network');

//ADD HOUSEHOLD
exports.addHousehold = function(householdName) {
  return function(dispatch) {
    return Network.addHousehold(householdName)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
             return dispatch(addHouseholdSuccess(body));
            } else {
             return dispatch(addHouseholdFailure(body));
            }
         });
      })
      .catch(function(error) {
        console.log(error);
        return dispatch(addHouseholdFailure(error.message));
      });
  };
};

// ADD_HOUSEHOLD_SUCCESS
function addHouseholdSuccess(data) {
  return {
    type: 'ADD_HOUSEHOLD_SUCCESS',
    payload: {
      household: data.household,
      token: data.token,
    },
  };
}

// ADD_HOUSEHOLD_FAILURE: display error message?
function addHouseholdFailure(message) {
  return {
    type: 'ADD_HOUSEHOLD_FAILURE',
    payload: {message},
    error: true,
  };
}

exports.leaveHousehold = function() {
  return function(dispatch) {
    return Network.updateUser({householdId: null})
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(leaveHouseholdSuccess(body));
            } else {
              return dispatch(leaveHouseholdFailure(body));
            }
          })
          .catch(function(error) {
            return dispatch(leaveHouseholdFailure(error.message));
          });
      })
      .catch(function(error) {
        return dispatch(leaveHouseholdFailure(error.message));
      });
  };
};

function leaveHouseholdSuccess(body) {
  return {
    type: 'LEAVE_HOUSEHOLD_SUCCESS',
    payload: {
      user: body.user,
      token: body.token,
    },
  };
}

function leaveHouseholdFailure(message) {
  return {
    type: 'LEAVE_HOUSEHOLD_FAILURE',
    payload: {message},
    error: true,
  };
}
