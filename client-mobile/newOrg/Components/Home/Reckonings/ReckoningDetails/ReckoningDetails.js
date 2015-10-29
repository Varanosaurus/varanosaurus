'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var ReckoningItemsDetails = require('./ReckoningItemsDetails/ReckoningItemsDetails');
var ReckoningUsersDetails = require('./dumb/ReckoningUsersDetails');
var Actions = require('../../../../Actions/Actions');

var ReckoningDetails = React.createClass({

  // TODO: component fetches items and users data for reckoning upon mounting?

  render() {
    switch (this.props.reckoningsDetailsMode) {
      case 'items':
        return this.renderItemsDetails();
      case 'users':
        return this.renderUserDetails();
      default:
        return this.renderItemsDetails();
    }
  },

  renderItemsDetails() {
    return (
      <ReckoningItemsDetails
        /* TODO: pass prop? */
        items={this.props.reckoning}
        onSelect={this.goToItemsDetailsView}
      />
    );
  },

  renderUsersDetails() {
    return (
      <ReckoningUsersDetails
        /* TODO: pass prop? */
        figures={this.props.reckoning.userFigures}
      />
    );
  },

  goToItemsDetailsView() {
    this.props.dispatch(Actions.setReckoningDetailsMode('items'));
  },

  goToUsersDetailsView() {
    this.props.dispatch(Actions.setReckoningDetailsMode('users'));
  },

});

function select(state) {
  return {
    reckoningDetailsMode: state.uiMode.reckoningsDetailsMode,
  };
}

module.exports = connect(select)(ReckoningDetails);
