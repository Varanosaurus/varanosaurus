var {combineReducers} = require('redux');

function user(state = {}, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.user;
  case 'SIGNUP_SUCCESS':
    return action.payload.user;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
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
  case 'ADD_HOUSEHOLD_SUCCESS':
    return action.payload.household;
  case 'UPDATE_INVITATION_SUCCESS':
    return action.payload.household;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return null;
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
}

function roommates(state = [], action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.roommates;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return [];
  case 'LOGOUT':
    return [];
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
  case 'ADD_ITEM_SUCCESS':
    if (action.payload.item.bought) {
      return {
        pending: state.pending,
        bought: [...state.bought, action.payload.item],
      };
    } else {
      return {
        pending: [...state.pending, action.payload.item],
        bought: state.bought,
      };
    }
    break;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return {pending: [], bought: []};
  case 'LOGOUT':
    return {pending: [], bought: []};
  default:
    return state;
  }
}

function reckonings(state = [], action) {
  switch (action.type) {
  case 'FETCH_RECKONING_LISTS_SUCCESS':
    return action.payload.reckonings.reckonings;
  case 'LOGOUT':
    return [];
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return [];
  default:
    return state;
  }
}

function selectedReckoning(state = null, action) {
  switch (action.type) {
  case 'FETCH_SELECTED_RECKONING_SUCCESS':
    return action.payload.reckoning;
  case 'LOGOUT':
    return null;
  case 'INITIATE_RECKONING_SUCCESS':
    return action.payload.household.reckoning;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return [];
  default:
    return state;
  }
}

function sent(state = [], action) {
  switch (action.type) {
  case 'ADD_INVITATION_SUCCESS':
    return action.payload.invitations;
  case 'LOGOUT':
    return [];
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return [];
  default:
    return state;
  }
}

function received(state = [], action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload.invitations;
  case 'UPDATE_INVITATION_SUCCESS':
    return action.payload.invitations;
  case 'LEAVE_HOUSEHOLD_SUCCESS':
    return [];
  case 'LOGOUT':
    return [];
  default:
    return state;
  }
}

module.exports = combineReducers({
  user,
  household,
  items,
  reckonings,
  invitations: combineReducers({sent, received}),
  roommates,
  selectedReckoning,
});



