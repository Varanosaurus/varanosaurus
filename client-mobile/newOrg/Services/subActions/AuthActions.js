var Network = require('../Network');

exports.login = function(username, password) {
  // Thunk
  return function(dispatch) {
    return Network.login(username, password)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (!response.ok) {
              return dispatch(loginFailure(body));
            } else {
              return dispatch(loginSuccess(body));
            }
          });
        // if (response.ok) {
        //   return response.json()
        //     .then(function(body) {
        //       console.log('dispatching loginSuccess: ' + body);
        //       return dispatch(loginSuccess(body));
        //     });
        // } else {
        //   return dispatch(loginFailure(response.statusText));
        // }
      })
      .catch(function(error) {
        return dispatch(loginFailure(error.message));
      });
  };
};

// LOGIN_SUCCESS: set token, user, and household(optional) from server's response into store
function loginSuccess(data) {

  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token: data.token,
      user: data.userData,
      household: data.household || null,
      roommates: data.roommates || null,
      invitations: data.invitations || null,
    },
  };
}

// LOGIN_FAILURE: display error message?

function loginFailure(message) {
  return {
    type: 'LOGIN_FAILURE',
    payload: {message},
    error: true,
  };
}

// LOGOUT: remove token and set state to initial?

exports.logout = function() {
  return {
    type: 'LOGOUT',
  };
};

// SIGNUP: submit username/password to server for creation of user; set token and user from server's response into store

exports.signup = function(username, password) {

  return function(dispatch) {
    return Network.signup(username, password)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(signupSuccess(body));
            } else {
              return dispatch(signupFailure(body));
            }
          });
      })
      .catch(function(error) {
        console.log(error);
        return dispatch(signupFailure(error.message));
      });
  };
};

function signupSuccess(data) {
  return {
    type: 'SIGNUP_SUCCESS',
    payload: {
      token: data.token,
      user: data.user,
      //always null on sign up
      household: null,
    },
  };
}

function signupFailure(message) {
  return {
    type: 'SIGNUP_FAILURE',
    payload: {message},
    error: true,
  };
}
