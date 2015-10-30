'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Styles = require('../../../../Styles/Styles');
// var Icon = require('react-native-vector-icons/Ionicons');

var {
  StyleSheet,
  ListView,
  View,
  SegmentedControlIOS,
  TouchableHighlight,
  Text,
} = React;

//TODO: add styles, add addItem functions

var ItemList = React.createClass({

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
  },

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);

    var selectedIndex;

    if (this.props.itemsFilter === 'pending') {
      selectedIndex = 0;
    } else {
      selectedIndex = 1;
    }

    return (
      <View style={Styles.list.container}>
      <Button onPress={this.props.gotoItemAddView}>Add an item</Button>
        <SegmentedControlIOS
          values={['Pending', 'Bought']}
          selectedIndex={selectedIndex}
          tintColor={'#2fb4da'}
          onValueChange={(val) => {
            if (val === 'Pending') {
              this.props.gotoPendingItemsList();
            } else if (val === 'Bought') {
              this.props.gotoBoughtItemsList();
            }
          }} />
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustcontentInsets={false}
          contentInset={{bottom: 50}}
        />
      </View>
    );
  },

  renderRow(item) {

    return (
        <TouchableHighlight
          style={styles.list.row}
          onPress={() => this.props.gotoItemDetailsView(item)} >
          <View>
            <Text style={styles.list.label}>{item.description}</Text>
          </View>
        </TouchableHighlight>
    );

  },

});

module.exports = ItemList;

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});
