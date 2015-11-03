var Network = require('../Network');
var UIModeActions = require('./UIModeActions');

// GET_RECKONINGS: grab list of household's associated reckonings for display as list
exports.fetchReckoningLists = function() {
  return function(dispatch) {
    Network.getReckoning()
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(fetchReckoningListsSuccess(body));
            }
          });
      });
  };
};

function fetchReckoningListsSuccess(data) {
  return {
    type: 'FETCH_RECKONING_LISTS_SUCCESS',
    payload: {
      reckonings: data,
    },
  };
}

exports.fetchSelectedReckoning = function() {
  return function(dispatch) {
    Network.getSelectedReckoning()
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(fetchSelectedReckoningSuccess(body));
            }
          });
      });
  };
};

function fetchSelectedReckoningSuccess(data) {
  return {
    type: 'FETCH_SELECTED_RECKONING_SUCCESS',
    payload: {
      reckoning: data.reckoning,
    },
  };
}

exports.initiateReckoning = function(shouldSetSettingsViewModeToLeave) {

  return function(dispatch) {
    return Network.initiateReckoning()
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              if (shouldSetSettingsViewModeToLeave) {
                dispatch(UIModeActions.setSettingsViewMode('leave'));
                dispatch(UIModeActions.selectReckoning(body.reckoning));
              }
              return dispatch(initiateReckoningSuccess(body));
            } else {
              return dispatch(initiateReckoningFailure(body));
            }
          });
      })
      .catch(function(error) {
        console.log(error);
        return dispatch(initiateReckoningFailure(error.message));
      });
  };
};

// INITIATE_RECKONING_SUCCESS
function initiateReckoningSuccess(data) {
  return {
    type: 'INITIATE_RECKONING_SUCCESS',
    payload: {
      household: data,
    },
  };
}

// INITIATE_RECKONING_FAILURE
function initiateReckoningFailure(message) {
  return {
    type: 'INITIATE_RECKONING_FAILURE',
    payload: {message},
    error: true,
  };
}
