'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var Homeless = require('./Homeless/Homeless');
var NavRedux = require('../NavRedux');

var Home = React.createClass({

  render() {
    console.log('truthy household?', !!this.props.household);
    return this.props.household
      ? <NavRedux />
      : <Homeless />;
  },

});

function select(state) {
  console.log('rendering homeless or home, state.data.household is: ', state.data.household);
  console.log('truthy?: ', state.data.household ? true : false);
  return {
    household: state.data.household,
    selectedHomeTab: state.uiMode.selectedHomeTab,
  };
}

module.exports = connect(select)(Home);
