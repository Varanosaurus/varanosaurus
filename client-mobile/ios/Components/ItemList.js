'use strict';

var React = require('react-native');
// var ShoppingListItem = require('./ShoppingListItem');
// var ShoppingItemDetail = require('./ShoppingItemDetail');

var {
  StyleSheet,
  ListView,
  View,
  Text,
} = React;

/* This mock data is here to simulate our API */
var mockedData = [
  {
    itemName: 'Milk',
    itemPrice: 10
  },
  {
    itemName: 'Bread',
    itemPrice: 7
  },
  {
    itemName: 'Detergent',
    itemPrice: 10
  },
  {
    itemName: 'Drinking Water',
    itemPrice: 9
  },
  {
    itemName: 'Kitchen Towel',
    itemPrice: 5
  },
  {
    itemName: 'Soap',
    itemPrice: 9
  },
  {
    itemName: 'Monthly Internet',
    itemPrice: 9
  },
  {
    itemName: 'Chips',
    itemPrice: 9
  },
  {
    itemName: 'Milk',
    itemPrice: 10
  },
  {
    itemName: 'Bread',
    itemPrice: 7
  },
  {
    itemName: 'Detergent',
    itemPrice: 10
  },
  {
    itemName: 'Drinking Water',
    itemPrice: 9
  },
  {
    itemName: 'Kitchen Towel',
    itemPrice: 5
  },
  {
    itemName: 'Soap',
    itemPrice: 9
  },
  {
    itemName: 'Monthly Internet',
    itemPrice: 9
  },
  {
    itemName: 'Chips',
    itemPrice: 9
  },
  {
    itemName: 'Chips',
    itemPrice: 9
  },
  {
    itemName: 'Milk',
    itemPrice: 10
  },
  {
    itemName: 'Bread',
    itemPrice: 7
  },
  {
    itemName: 'Detergent',
    itemPrice: 10
  },
  {
    itemName: 'Drinking Water',
    itemPrice: 9
  },
  {
    itemName: 'Kitchen Towel',
    itemPrice: 5
  },
  {
    itemName: 'Soap',
    itemPrice: 9
  },
  {
    itemName: 'Monthly Internet',
    itemPrice: 9
  },
  {
    itemName: 'Chips',
    itemPrice: 9
  }
];

/* ItemCell */
// var ItemCell = React.createClass({
//   render: function() {
//     return (
//       <View style={styles.itemCell}>
//         <Text style={styles.itemName}>{this.props.itemName}</Text>
//         <Text style={styles.itemPrice}>{this.props.itemPrice}</Text>
//       </View>
//     );
//   }
// });

var ItemList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }).cloneWithRows(mockedData)
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    // Return mocked data for now
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockedData)
    });
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
      />
    );
  },
  renderItem: function(item) {
    return (
      <View style={styles.itemCell}>
        <Text style={styles.itemName}>{item.itemName}</Text>
        <Text style={styles.itemPrice}>${item.itemPrice}</Text>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
  },
  listView: {
    paddingTop: 20,
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

module.exports = ItemList;
