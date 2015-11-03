var Network = require('../Network');

exports.fetchItemLists = function() {
  return function(dispatch) {
    Network.getItems()
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(fetchItemListsSuccess(body));
            }
          });
      });
  };
};

function fetchItemListsSuccess(data) {
  return {
    type: 'FETCH_ITEM_LISTS_SUCCESS',
    payload: {
      items: data,
    },
  };
}

exports.addItem = function(item) {
  return function(dispatch) {
    return Network.addItem(item)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(addItemSuccess(body.item));
            } else {
              return dispatch(addItemFailure(body.error));
            }
          });
      });
  };
};

function addItemSuccess(item) {
  return {
    type: 'ADD_ITEM_SUCCESS',
    payload: {item},
  };
}

function addItemFailure(error) {
  return {
    type: 'ADD_ITEM_FAILURE',
    payload: {error},
  };
}

exports.updateItem = function(updates) {

  //Thunk
  return function(dispatch) {
    return Network.updateItem(updates)
      .then(function(response) {
        return response.json()
          .then(function(body) {
            if (response.ok) {
              return dispatch(updateItemSuccess(body));
            } else {
              return dispatch(updateItemFailure(body));
            }
          });
      })
      .catch(function(error) {
        console.log(error);
        return dispatch(updateItemFailure(error.message));
      });
  };
};

function updateItemSuccess(data) {
  console.log('making updateItemSuccess action');
  return {
    type: 'UPDATE_ITEM_SUCCESS',
    payload: {
      items: data,
    },
  };
}

function updateItemFailure(message) {
  console.log('making updateItemFailure action');
  return {
    type: 'UPDATE_ITEM_FAILURE',
    payload: {message},
    error: true,
  };
}
