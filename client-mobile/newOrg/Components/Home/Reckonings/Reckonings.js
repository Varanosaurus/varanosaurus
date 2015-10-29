'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var Actions = require('../../../Actions/Actions');

var ReckoningList = require('./dumb/ReckoningList');
var ReckoningDetails = require('./ReckoningDetails/ReckoningDetails');

var Reckoning = React.createClass({

  componentWillMount() {
    this.props.dispatch(Actions.fetchReckoningLists());
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
        //handleSelect={this.handleSelect}
        goToReckoningDetailsView={this.goToReckoningDetailsView}
      />
    );
  },

  renderDetails() {
    var reckoning;
    console.log(this.props.reckonings);
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

  // handleSelect(data) {
  //   this.dispatch(Actions.selectReckoning(data));
  // },

  goToReckoningDetailsView(reckoning) {
    this.props.dispatch(Actions.setReckoningsViewMode('details'));
    this.props.dispatch(Actions.selectReckoning(reckoning));
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
