'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} = React;

var InviteRoommates = React.createClass({
  getInitialState: function() {
    return ({
      inputField: [true, true, true],
    });
  },
  render() {
    var inputFields = this.state.inputField;
    var self = this;
    return (
      <View style={styles.container}>
        {
          inputFields.map(function() {
            return (
              <View style={styles.inputLine}>
              <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder="roommate username"
                onChangeText={(input) => {
                  self.setState({input: input});
                }}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={self.submitRoommates}
              >
                <Text style={styles.btnText}>Invite</Text>
              </TouchableHighlight>
              </View>

            );
          })
        }
        <Text style={styles.hyperLink} onPress={self.addRoommate}>Invite More</Text>
        <Text style={styles.errorHandling}>{self.state.error}</Text>
      </View>
    );
  },

  addRoommate() {
    this.state.inputField.push(true);
    this.setState(this.state.inputField);
  },

  submitRoommates() {
    var data = this.state.inputs;
    //Note: need to write better logic for error handling. right now if the user deletes all the text in the input fields, they won't get the error
    if (this.state.input === undefined) {
      this.setState({error: 'Please add at least one roommate before submitting'});
    } else {
      this.props.submit(data);
    }
  },

});

module.exports = InviteRoommates;

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  inputLine: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,

  },
  hyperLink: {
    color: 'blue',
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  errorHandling: {
    color: 'red',
  },
});
