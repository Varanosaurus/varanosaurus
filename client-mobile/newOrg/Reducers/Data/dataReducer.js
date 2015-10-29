var {combineReducers} = require('redux');

function user(state = {}, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.user;
  case 'SIGNUP_SUCCESS':
    return action.payload.user;
  case 'LOGOUT':
    return {};
  default:
    return state;
  }
}

function household(state = null, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.household;
  case 'LOGOUT':
    return null;
  case 'ADD_HOUSEHOLD_SUCCESS':
    return action.payload.household;
  default:
    return state;
  }
}

function roommates(state = null, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.roommates;
  default:
    return state;
  }
}

function items(state, action) {
  if (state == null) {
    return {pending: [], bought: []};
  }

  switch (action.type) {
  case 'FETCH_ITEM_LISTS_SUCCESS':
  case 'UPDATE_ITEM_SUCCESS':
    return {
      pending: action.payload.items.pending,
      bought: action.payload.items.bought,
    };
  default:
    return state;
  }
}

function reckonings(state = [], action) {
  switch (action.type) {
  case 'FETCH_RECKONING_LISTS_SUCCESS':
    return action.payload.reckonings.reckonings;
  default:
    return state;
  }
}

function invitations(state, action) {
  if (state == null) {
    return {sent: [], received: []};
  }

  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.invitations;
  default:
    return state;
  }
}

module.exports = combineReducers({
  user,
  household,
  items,
  reckonings,
  invitations,
  roommates,
});
