'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
} = React;

var InviteRoommates = React.createClass({

  getInitialState() {
    return ({
      inputField: true,
    });
  },

  componentWillUnmount() {
    this.props.resetSettingsViewMode();
  },

  render() {
    return (
      <View style={styles.mainSection}>
        <TextInput
          style={styles.input}
          keyboardType='default'
          placeholder="roommate's username"
          onChangeText={(input) => this.setState({input: input})}
        />
        <Text style={styles.errorHandling}>{this.state.error}</Text>
        <Button onPress={this.submitRoommates} style={styles.btn}>Invite Roommate</Button>

        <Text>Pending invitations to:</Text>
        <Text>Pending roommate 1</Text>
        <Text>Pending roommate 2</Text>
        <Text>Pending roommate 3</Text>
      </View>
    );
  },

  submitRoommates() {
    var username = this.state.input;
    //Note: need to write better logic for error handling. right now if the user deletes all the text in the input fields, they won't get the error
    if (this.state.input === undefined) {
      this.setState({error: 'Please add at least one roommate before submitting'});
    } else {
      this.props.handleInviteRoommates(username);
    }
  },

});

module.exports = InviteRoommates;

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
  errorHandling: {
    color: 'red',
  },
});
