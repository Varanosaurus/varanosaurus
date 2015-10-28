'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var ReckoningList = require('./dumb/ReckoningList');
var ReckoningDetails = require('./ReckoningDetails/ReckoningDetails');
var Actions = require('../../../Actions/Actions');

var Reckoning = React.createClass({

  componentWillMount() {
    this.props.dispatch(Actions.fetchReckoningLists());
    console.log(this.props.reckonings);
  },

  render() {
    switch (this.props.reckoningsViewMode) {
      case 'list':
        return this.renderList();
      case 'details':
        return this.renderDetails();
      default:
        return this.renderList();
    }
  },

  renderList() {
    return (
      <ReckoningList
        reckonings={this.props.reckonings}
        handleSelect={this.handleSelect}
      />
    );
  },

  renderDetails() {
    var reckoning;

    this.props.reckonings.forEach((dataReckoning) => {
      if (dataReckoning.id === this.props.selectedReckoning) {
        reckoning = dataReckoning;
      }
    });

    return (
      <ReckoningDetails
        reckoning={reckoning}
      />
    );
  },

  handleSelect(data) {
    this.dispatch(Actions.selectReckoning(data));
  },

});

function select(state) {
  return {
    reckoningsViewMode: state.uiMode.reckoningsViewMode,
    reckonings: state.data.reckonings,
    selectedReckoning: state.uiMode.selectedReckoning,
  };
}

module.exports = connect(select)(Reckoning);
