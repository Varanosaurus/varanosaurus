var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} = React;

var InvitedToHH = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>JOIN A HH VIEW -INVITED- IS WORKING</Text>
        <Text> ----- OR ----- </Text>
        <TouchableHighlight
          style={styles.button}
          // onPress={() => this.()}
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

module.exports = InvitedToHH;
