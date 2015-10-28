'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var Actions = require('../../../Actions/Actions');

var ItemList = require('./dumb/ItemList');
var ItemDetails = require('./dumb/ItemDetails');
// var ItemAdd = require('./ItemAdd/ItemAdd');

// var {
//   Text,
// } = React;

var Items = React.createClass({

  componentWillMount() {
    this.props.dispatch(Actions.fetchItemLists());
  },

  render() {
    switch (this.props.itemsViewMode) {
    case 'list':
      return this.renderItemList();
    case 'details':
      return this.renderItemDetails();
    }
  },

  renderItemList() {
    console.log('rendering item list');
    return <ItemList
      itemsFilter={this.props.itemsFilter}
      items={this.props.items}
      gotoPendingItemsList={this.gotoPendingItemsList}
      gotoBoughtItemsList={this.gotoBoughtItemsList}
      goToItemDetailsView={this.goToItemDetailsView}
    />;
  },

  renderItemDetails() {
    console.log('rendering itemDetails');
    return <ItemDetails
      item={this.props.selectedItem}
    />;
  },

  gotoPendingItemsList() {
    this.props.dispatch(Actions.setItemsFilter('pending'));
  },

  gotoBoughtItemsList() {
    this.props.dispatch(Actions.setItemsFilter('bought'));
  },

  goToItemDetailsView(item) {
    this.props.dispatch(Actions.setItemsViewMode('details'));
    this.props.dispatch(Actions.selectItem(item));
  },

});


function select(state) {

  var items = (state.uiMode.itemsFilter === 'pending')
    ? state.data.items.pending
    : state.data.items.bought;

  var selectedItem;
  if (state.uiMode.selectedItemId) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === state.uiMode.selectedItemId) {
        selectedItem = items[i];
      }
    }
  }

  return {
    itemsViewMode: state.uiMode.itemsViewMode,
    itemsFilter: state.uiMode.itemsFilter,
    itemDetails: state.uiMode.itemDetails,
    selectedItemId: state.uiMode.selectedItemId,
    items,
    selectedItem,
  };
}

// var itemListHandlers = {
//   gotoPendingItemsList() {
//     //TODO: ACTION - UPDATE uiMode.itemsFilter to pending
//     //set items to pendingItems
//   },
//   gotoBoughtItemsList() {
//     //TODO: ACTION - UPDATE uiMode.itemsFilter to bought
//     //set items to boughtItems
//   },
//   // goToItemDetailsView(item) {
//   //   //TODO: ACTION - UPDATE uiMode.itemsViewMode to details
//   // },
//   gotoAddItemView() {
//     //TODO: ACTION - UPDATE uiMode.itemsViewMode to add
//   },
// };

// var itemDetailsHandlers = {
//   //TODO
// };

// var itemAddHandlers = {
//   //TODO
// };

module.exports = connect(select)(Items);
