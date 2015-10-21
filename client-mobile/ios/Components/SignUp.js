'use strict';

var React = require('react-native');
var CreateNewHH = require('./CreateNewHH');

var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  TextInput,
} = React;

var SignUp = React.createClass({
  getInitialState: function() {
    return ({
       username: '',
       password: '',
       error: '',
    });
  },
  joinOrCreateHousehold: function() {
    // var init = {
    //   method: 'POST',
    //   cache: 'default',
    // };
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });
    //if user does not provide sufficient username or password, send error feedback
    //note: logic below doesn't take into account accepted character types
    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({
        error: 'Please provide a username that is greater than 3 characters and less than 13 characters. Please provide a password that is greater than 5 characters and less than 29 characters.',
      });
    } else if (this.state.username.length < 4 || this.state.username.length > 20) {
      this.setState({
        error: 'Please provide a username that is greater than 3 characters and less than 21 characters',
      });
    } else if (this.state.password.length < 6 || this.state.username.password > 28) {
      this.setState({
        error: 'Please provide a password that is greater than 5 characters and less than 29 characters',
      });
    } else {
    // fetch(mock, init)
      //if you are not in a household
      this.props.navigator.push({
        title: 'Create Household',
        component: CreateNewHH,
      });
      //NOTE: need to receive data from the server re: if user was invited to HH or not
      //if you are in a household
      // this.props.navigator.push({
      //   index: 4,
      //   id: 'Invited'
      // })
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput keyboardType='default' style={styles.input} placeholder='username' onChangeText={(username) => this.setState({username})} value={this.state.username}/>
        <TextInput keyboardType='default' style={styles.input} placeholder='password' secureTextEntry={true} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
        <Text style={styles.errorHandling}>{this.state.error}</Text>
        <TouchableHighlight style={styles.button} onPress={this.joinOrCreateHousehold}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  },
});

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

module.exports = SignUp;
