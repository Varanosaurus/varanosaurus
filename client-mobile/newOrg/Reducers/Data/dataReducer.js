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
  case 'ADD_HOUSEHOLD_SUCCESS':
    return action.payload.household;
  case 'UPDATE_INVITATION_SUCCESS':
    console.log('household reducer being called on success with: ', action.payload);
    return action.payload.household;
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
  default:
    return state;
  }
}

function sent(state = [], action) {
  switch (action.type) {
  case 'ADD_INVITATION_SUCCESS':
    return action.payload.invitations;
  // case 'FETCH_PENDING_INVITES_SUCCESS':
  //   return action.payload.data;
  case 'LOGOUT':
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
  case 'LOGOUT':
    return [];
  default:
    return state;
  }
}

// function finalReckoning(state = null, action) {
//   switch (action.type) {
//   case 'INITIATE_RECKONING_SUCCESS':
//     console.log('action received is: ', action);
//     return state;
//   default:
//     return state;
//   }
// }

module.exports = combineReducers({
  user,
  household,
  items,
  reckonings,
  invitations: combineReducers({sent, received}),
  roommates,
  selectedReckoning,
  // finalReckoning,
});



