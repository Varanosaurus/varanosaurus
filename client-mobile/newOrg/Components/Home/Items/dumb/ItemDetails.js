'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
} = React;

var ItemDetail = React.createClass({

  getInitialState() {
    return {price: 0};
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.description}</Text>
        <Text>Requested By: {this.props.creator.username}</Text>
        <Text>Details: {this.props.item.details}</Text>
        <Text style={styles.showing}>$ {this.props.item.price}</Text>
      </View>
    );
  },
});

module.exports = ItemDetail;

var styles = StyleSheet.create({
  key: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 64,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 39,
    color: 'gray',
  },
  board: {
    padding: 1,
    backgroundColor: '#000000',
  },
  rows: {
    flexDirection: 'row',
  },
  cell: {
    height: 90,
    width: 90,
    backgroundColor: '#f1f1f1',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showing: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 50,
    fontFamily: 'Arial',
  },
  textInside: {
    fontFamily: 'Arial',
    fontSize: 30,
  },
  functionalButton: {
    backgroundColor: '#2fb4da',
  },
  functionalText: {
    color: 'white',
  },
});
