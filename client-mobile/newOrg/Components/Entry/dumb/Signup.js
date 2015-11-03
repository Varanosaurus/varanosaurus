'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Styles = require('../../../Styles/Styles');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
} = React;

var Signup = React.createClass({

  getInitialState() {
    return ({
       username: '',
       password: '',
    });
  },

  render() {
    return (
          <View style={styles.container}>
          <TextInput
            keyboardType='default'
            style={styles.input}
            placeholder='username'
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            keyboardType='default'
            style={styles.input}
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Text style={styles.errorHandling}>{this.props.errorHandling}</Text>
          <Button style={Styles.default.btn} onPress={this.handleSubmit}>
            Sign up
          </Button>
          <Text>Already have an account?</Text>
          <Button style={Styles.default.btn} onPress={this.props.gotoLogin}>
            Log in
          </Button>
        </View>);
  },

  handleSubmit() {
    var data = {username: this.state.username, password: this.state.password};
    this.props.submit(data);
  },

});

module.exports = Signup;

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
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  errorHandling: {
    color: 'red',
  },
});
