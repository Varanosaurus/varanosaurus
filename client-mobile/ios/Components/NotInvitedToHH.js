var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} = React;

var NotInvitedToHH = React.createClass({
  createNewHH: function() {
    this.props.navigator.push({
      index: 5,
      id: 'Create new household'
    })
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>You're not in a household yet, please have your roommate invite you</Text>
        <Text> ----- OR ----- </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.createNewHH()}
        >
          <Text style={styles.btnText}>Create New Household</Text>

        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    height: 15,
    flex: 1,
    margin: 2,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  }
});

module.exports = NotInvitedToHH;
