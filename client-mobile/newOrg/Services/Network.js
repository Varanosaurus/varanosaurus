'use strict';

var Store = require('./Store');

var testUrl = 'http://localhost:8080/';
var deployUrl;

var url = deployUrl || testUrl;
var userUrl = 'api/users/';
var itemUrl = 'api/items/';
var householdUrl = 'api/households/';
var reckoningUrl = 'api/reckonings/';
var invitationUrl = 'api/invitations/';

var makeParams = function(method, body) {

  var params = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  if (Store.getState().token) {
    //attach the token if given
    params.headers['X-Access-Token'] = Store.getState().token;
  }

  return params;

};

var signup = function(username, password) {
  var params = makeParams('POST', {username, password});

  // TODO: just return response
  return fetch(url + 'auth/signup', params)
    .catch(function(error) {
      console.error(error);
    });
};

var login = function(username, password) {
  var params = makeParams('POST', {username, password});

  return fetch(url + 'auth/login', params)
    .catch(function(error) {
      console.error(error);
    });
};

//updates should be an object where the keys
//are the properties to be changed
//and the values are the new values
var updateUser = function(updates) {
  var params = makeParams('PUT', updates);
  return fetch(url + userUrl + Store.getState().data.user.id, params)
    //make sure to tell the other thing to reset the token
    .catch(function(error) {
      console.error(error);
    });
};

//getUser --> necessary? should be returned with login/signup/updateUser

var deleteUser = function() {
  var params = makeParams('DELETE');
  return fetch(url + userUrl + Store.getState().data.user.id, params)
    .catch(function(error) {
      console.error(error);
    });
};

var addHousehold = function(name) {
  var params = makeParams('POST', {name});
  return fetch(url + householdUrl, params)
    .catch(function(error) {
      console.error(error);
    });
};

var getItems = function() {
  var params = makeParams('GET');
  return fetch(url + itemUrl, params)
    .catch(function(error) {
      console.error(error);
    });
};

// getHousehold --> needed if we return the household at login/signup?

var updateHousehold = function(updates) {
  var params = makeParams('PUT', updates);
  return fetch(url + 'api/households/' + Store.getState().data.household.id, params)
    .catch(function(error) {
      console.error(error);
    });
};

var deleteHousehold = function() {
  var params = makeParams('DELETE');
  return fetch(url + householdUrl + Store.getState().data.household.id, params)
    .catch(function(error) {
      console.error(error);
    });
};

//options = requestBody for 'add an item' in apiInterface
var addItem = function(options) {
  var params = makeParams('POST', options);
  return fetch(url + itemUrl, params)
    .catch(function(error) {
      console.error(error);
    });
};

var getItem = function() {
  var params = makeParams('GET');
  return fetch(url + itemUrl + Store.getState().uiMode.selectedItemId, params)
    .catch(function(error) {
      console.error(error);
    });
};

//getallItemsInHousehold --> necessary? Could just send back with login

var updateItem = function(updates) {
  console.log('updates: ', updates);
  var params = makeParams('PUT', updates);
  return fetch(url + itemUrl + Store.getState().uiMode.selectedItemId, params)
    .catch(function(error) {
      console.error(error);
    });
};

var inviteUser = function(toUsername) {
  var params = makeParams('POST', {toUsername});
  return fetch(url + invitationUrl, params)
    .catch(function(error) {
      console.error(error);
    });
};

var getInvitationInbox = function() {
  var params = makeParams('GET');
  return fetch(url + invitationUrl + '/inbox', params)
    .catch(function(error) {
      console.error(error);
    });
};

var getInvitationOutbox = function() {
  var params = makeParams('GET');
  return fetch(url + invitationUrl + '/outbox', params)
    .catch(function(error) {
      console.error(error);
    });
};

var respondToInvitation = function(status, invitationId) {
  var params = makeParams('PUT', {status});
  return fetch(url + invitationUrl + invitationId, params)
    .catch(function(error) {
      console.error(error);
    });
};

//deleteInvitation?

var getReckoning = function() {
  var params = makeParams('GET');
  return fetch(url + reckoningUrl, params)
    .catch(function(error) {
      console.error(error);
    });
};


module.exports = {
  signup,
  login,
  updateUser,
  deleteUser,

  addHousehold,
  updateHousehold,
  deleteHousehold,

  inviteUser,
  respondToInvitation,
  getInvitationInbox,
  getInvitationOutbox,

  addItem,
  getItem,
  updateItem,
  getItems,

  getReckoning,
};
