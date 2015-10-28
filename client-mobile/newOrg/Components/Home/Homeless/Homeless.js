'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var JoinOrCreateHousehold = require('./dumb/JoinOrCreateHousehold');
// var InviteRoommates = require('./dumb/InviteRoommates');

var Homeless = React.createClass({

  //if you created a household
  render() {
    return (
      <JoinOrCreateHousehold
        invitations={this.props.invitations}
        join={this.handleJoinHousehold}
        decline={this.handleDeclineHousehold}
        submit={this.handleHouseholdCreation}
        gotoInviteRoommates={this.gotoInviteRoommates}
      />
    );
  },

  // renderCreateHousehold() {
  //   return (
  //     <CreateHousehold
  //       submit={this.handleHouseholdCreation}
  //       gotoInviteRoommates={this.gotoInviteRoommates}
  //     />
  //   );
  // },

  gotoInviteRoommates() {
    //dispatch action to store, changing homelessViewMode to inviteRoommates
    this.props.dispatch();
  },

  handleJoinHousehold(/*TODO: payload*/) {
    //dispatch action to store causing update of joined household (user belongs to household --> go to homeTab)
    this.props.dispatch(/*TODO: JOIN HOUSEHOLD*/);
  },

  handleDeclineHousehold(/*TODO: payload*/) {
    //dispatch action to store causing removal of household invitation (updates invitation list in invitations UI)
    this.props.dispatch(/*TODO: REMOVE HOUSEHOLD INVITATION*/);
  },

  handleHouseholdCreation(/*TODO: payload*/) {
    // dispatch action to store causing creation of new household
    this.props.dispatch(/*TODO: HOUSEHOLD CREATION*/);
  },

  handleInviteRoommates(/*TODO: payload*/) {
    //dispatch action to store --> update store with creation of new invitation model in data.invitations
    this.props.dispatch(/*TODO: SEND INVITES*/);
  },

});

function select(state) {
  return {
    invitations: state.data.invitations,
    house: state.data.user.householdId,
  };
}

module.exports = connect(select)(Homeless);

