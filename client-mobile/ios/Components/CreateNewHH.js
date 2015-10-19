var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  TextInput,
  View,
  Text,
} = React;

var CreateNewHH = React.createClass({
  // inviteRoommates: function() {

  // },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>CREATE NEW HOUSEHOLD VIEW</Text>
        <TouchableHighlight
          style={styles.button}
          // onPress={() => this.inviteRoommates()}
        >
          <Text style={styles.btnText}>Suggestion 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          // onPress={() => this.inviteRoommates()}
        >
          <Text style={styles.btnText}>Suggestion 2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          // onPress={() => this.inviteRoommates()}
        >
          <Text style={styles.btnText}>Suggestion 3</Text>
        </TouchableHighlight>
        <Text> ----- OR ----- </Text>
        <TextInput style={styles.input} placeholder='Create household name'/>
        <TouchableHighlight
          style={styles.button}
          // onPress={() => this.inviteRoommates()}
        >
          <Text style={styles.btnText}>Make household</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    flexDirection: 'column',
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
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});

module.exports = CreateNewHH;
