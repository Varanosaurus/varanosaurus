'use strict';

var React = require('react-native');

var {connect} = require('react-redux');

var Actions = require('../../../Actions/Actions');
var Icon = require('react-native-vector-icons/Foundation');

var Items = require('../Items/Items');
var Reckonings = require('../Reckonings/Reckonings');
var Settings = require('../Settings/Settings');

var {
  TabBarIOS,
  // StyleSheet,
} = React;

var HomeTab = React.createClass({

  render() {
    return (

      <TabBarIOS selectedTab={this.props.selectedTab}>
        <Icon.TabBarItem
          selected={this.props.selectedTab === 'items'}
          title='Items'
          iconName={'shopping-cart'}
          iconSize={40}
          onPress={this.gotoItemsTab}
        >
          {this.renderItemsTabView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.props.selectedTab === 'reckonings'}
          title='Reckonings'
          iconName={'graph-pie'}
          iconSize={40}
          onPress={this.gotoReckoningsTab}
        >
          {this.renderReckoningsTabView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.props.selectedTab === 'settings'}
          title='Settings'
          iconName={'widget'}
          iconSize={40}
          onPress={this.gotoSettingsTab}
        >
          {this.renderSettingsTabView()}
        </Icon.TabBarItem>
      </TabBarIOS>

    );

  },

  renderItemsTabView() {
    return <Items navigator={this.props.navigator} />;
  },

  renderReckoningsTabView() {
    return <Reckonings navigator={this.props.navigator} />;
  },

  renderSettingsTabView() {
    return <Settings navigator={this.props.navigator} />;
  },

  gotoItemsTab() {
    this.props.dispatch(Actions.setHomeTab('items'));
    // Probably unneeded due to navigator
    // this.props.dispatch(Actions.setItemsViewMode('list'));
  },
  gotoReckoningsTab() {
    this.props.dispatch(Actions.setHomeTab('reckonings'));
  },
  gotoSettingsTab() {
    this.props.dispatch(Actions.setHomeTab('settings'));
  },

});

function select(state) {
  return {
    selectedTab: state.uiMode.selectedHomeTab,
  };
}

module.exports = connect(select)(HomeTab);
