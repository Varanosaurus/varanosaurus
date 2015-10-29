'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ListView,
  View,
  TouchableHighlight,
  Text,
} = React;

// var ReckoningCell = require('./ReckoningCell');

var ReckoningList = React.createClass({

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  },

  renderRow(reckoning) {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.props.goToReckoningDetailsView(reckoning)} >
          <View>
            <Text>{reckoning.date.toString()}</Text>
          </View>
        </TouchableHighlight>
      </View>
      // <ReckoningCell
      //   onSelect={this.props.handleSelect}
      //   reckoning={reckoning}
      ///>
    );
  },

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.reckonings);
    console.log('dataSource is : ', dataSource);
    return (
        <View style={styles.reckoningList}>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
            style={styles.listView}
            automaticallyAdjustContentInsets={false}
            contentInset={{bottom: 50}}
           />
        </View>
      );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  Cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
    padding: 6,
    borderBottomWidth: .5,
    borderColor: 'lightgray',
  },
  statementName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  reckoningList: {
    flex: 1,
    marginTop: 64,
  },
});

module.exports = ReckoningList;
