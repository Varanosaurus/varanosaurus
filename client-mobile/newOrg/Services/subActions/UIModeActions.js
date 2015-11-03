var ReckoningActions = require('./ReckoningActions');

exports.setEntryMode = function(mode) {
  return {
    type: 'SET_ENTRY_MODE',
    payload: {mode},
  };
};

// SET_HOMETAB, with payload of 'items', 'reckonings', or 'settings' ?
exports.setHomeTab = function(mode) {
  return {
    type: 'SET_HOME_TAB',
    payload: {mode},
  };
};

exports.setItemsViewMode = function(mode) {
  return {
    type: 'SET_ITEMS_VIEW_MODE',
    payload: {mode},
  };
};

// SET_ITEMS_FILTER, with payload of 'pending' or 'bought' ?
exports.setItemsFilter = function(filter) {
  return {
    type: 'SET_ITEMS_FILTER',
    payload: {filter},
  };
};

exports.setAddItemRequestStatus = function(status) {
  return {
    type: 'SET_ADD_ITEM_REQUEST_STATUS',
    payload: {status},
  };
};

exports.selectItem = function(item) {
  console.log('selecting item ' + item);
  return {
    type: 'SELECT_ITEM',
    payload: {itemId: item.id},
  };
};

// SELECT_RECKONING: set state.uiMode.selectedReckoning to payload reckoning id
exports.selectReckoning = function(reckoning) {
  return {
    type: 'SELECT_RECKONING',
    payload: {reckoningId: reckoning.id},
  };
};

// SET_RECKONINGS_VIEW_MODE: 'list', 'details'
exports.setReckoningsViewMode = function(mode) {
  return {
    type: 'SET_RECKONINGS_VIEW_MODE',
    payload: {mode},
  };
};

// RECKONING_SELECT_ITEM: set state.uiMode.reckoningsSelectedItem to payload item id
exports.setReckoningDetailsMode = function(mode) {
  return {
    type: 'SET_RECKONING_DETAILS_MODE',
    payload: {mode},
  };
};

// SET_SETTINGS_VIEW_MODE
exports.setSettingsViewMode = function(mode) {
  if (mode === 'leave') {
    return ReckoningActions.initiateReckoning(true);
  } else {
    return settingsViewMode(mode);
  }
};

function settingsViewMode(mode) {
  return {
    type: 'SET_SETTINGS_VIEW_MODE',
    payload: {mode},
  };
}

