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
          return (<TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder="roommate's email address"
                    onChangeText={(input) => self.setState({input: input})}
                  />);
          })
        }
        <Text style={styles.hyperLink} onPress={this.addRoommate}>Invite More</Text>
        <Text style={styles.errorHandling}>{this.state.error}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.submitRoommates}
        >
          <Text style={styles.btnText}>Invite Roommates</Text>
        </TouchableHighlight>
      </View>
    );
  },

  addRoomate() {
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  hyperLink: {
    color: 'blue',
  },
  button: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  errorHandling: {
    color: 'red',
  },
});

