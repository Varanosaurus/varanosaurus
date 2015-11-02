'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var Actions = require('../../../Actions/Actions');

var JoinOrCreateHousehold = require('./dumb/JoinOrCreateHousehold');

var Homeless = React.createClass({

  render() {
    return <JoinOrCreateHousehold
          invitations={this.props.invitations}
          respondToInvitation={this.handleUpdateInvitation}
          submit={this.handleHouseholdCreation}
        />;
  },

  handleUpdateInvitation(status, invitationId) {
    //dispatch action to store causing update of joined household (user belongs to household --> go to homeTab)
    this.props.dispatch(Actions.updateInvitation(status, invitationId));
  },

  handleHouseholdCreation(data) {
    // dispatch action to store causing creation of new household
    this.props.dispatch(Actions.addHousehold(data));
  },

});

function select(state) {
  return {
    invitations: state.data.invitations.received,
    house: state.data.user.householdId,
  };
}

module.exports = connect(select)(Homeless);

