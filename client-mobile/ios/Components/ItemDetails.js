'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var ItemDetails = React.createClass({
  render: function() {
    return (
      <View contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
            <Text style={styles.itemName}>{this.props.item.ItemName}</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  }
});

module.exports = ItemDetails;
