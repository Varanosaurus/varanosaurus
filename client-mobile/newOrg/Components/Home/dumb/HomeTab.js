'use strict';

var React = require('react-native');

var Items = require('../Items/Items');
var Reckonings = require('../Reckonings/Reckonings');
var Settings = require('../Settings/Settings');

var {
  TabBarIOS,
} = React;

var HomeTab = React.createClass({

  render() {

    return (

      <TabBarIOS selectedTab={this.props.uiMode}>
        <TabBarIOS.Item
          selected={this.props.uiMode === 'itemsTab'}
          title='Items'
          onPress={this.props.gotoItemsTab}
        >
          {this.renderItemsTabView()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.props.uiMode === 'reckoningsTab'}
          title='Reckonings'
          onPress={this.props.gotoReckoningsTab}
        >
          {this.renderReckoningsTabView()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.props.uiMode === 'settingsTab'}
          title='Settings'
          onPress={this.props.gotoSettingsTab}
        >
          {this.renderSettingsTabView()}
        </TabBarIOS.Item>
      </TabBarIOS>

    );

  },

  renderItemsTabView() {
    return <Items />;
  },

  renderReckoningsTabView() {
    return <Reckonings />;
  },

  renderSettingsTabView() {
    return <Settings />;
  },

});

module.exports = HomeTab;

