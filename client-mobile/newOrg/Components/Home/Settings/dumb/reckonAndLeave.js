'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
  StyleSheet,
  View,
  Text,
} = React;

var ReckonAndLeave = React.createClass({

  render() {
    return (
      <View style={styles.mainSection}>
        <Text>
          Ok, {this.props.username}. Before you go, we crunched your numbers.
          This month, you contributed ${this.props.contribution} and you'll owe your roommates ${this.props.debt}.
        </Text>
        <Button style={styles.btn} onPress={this.props.leaveHousehold}>
          Got it. Get me outta here!
        </Button>
      </View>
    );
  },

});

module.exports = ReckonAndLeave;

var styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 39,
    color: 'gray',
  },
  itemName: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: '500',
  },
  mainSection: {
    flex: 1,
    marginTop: 64,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
