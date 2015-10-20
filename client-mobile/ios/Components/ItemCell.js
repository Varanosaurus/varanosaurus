'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

// var getStyleFromScore = require('./getStyleFromScore');
// var getImageSource = require('./getImageSource');
// var getTextFromScore = require('./getTextFromScore');

  // <View style={styles.itemCell}>
  //   <Text style={styles.itemName}>{item.itemName}</Text>
  //   <Text style={styles.itemPrice}>${item.itemPrice}</Text>
  // </View>

var ItemCell = React.createClass({
  render: function() {
    var TouchableElement = TouchableHighlight;

    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect} >
          <View style={styles.itemCell}>
            <Text style={styles.itemName}>{this.props.item.itemName}</Text>
            <Text style={styles.itemPrice}>${this.props.item.itemPrice}</Text>
          </View>
        </TouchableElement>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  itemCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
    padding: 6,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  },
  itemName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  }
});

module.exports = ItemCell;
