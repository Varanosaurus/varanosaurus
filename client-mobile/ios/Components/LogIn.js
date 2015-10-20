'use strict';

var React = require('react-native');
var TabView = require('./TabView');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} = React;

var LogIn = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TabView />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

module.exports = LogIn;
