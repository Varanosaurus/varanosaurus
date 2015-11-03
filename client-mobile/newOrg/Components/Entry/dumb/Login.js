'use strict';

var React = require('react-native');
var Button = require('react-native-button');
<<<<<<< HEAD
var Styles = require('../../../Styles/Styles');
var Icon = require('react-native-vector-icons/Foundation');
=======
>>>>>>> 902485301fe82cc66e1985b0846f4be7a4a681b5

var {
  StyleSheet,
  View,
  Text,
  TextInput,
} = React;

var Login = React.createClass({

  getInitialState() {
    return ({
       username: '',
       password: '',
    });
  },

  render() {
    return (
          <View style={styles.container}>
          <Text style={Styles.default.title}>Knead</Text>
          <Text style={Styles.default.subheading}>Happy roommates!</Text>
          <Text style={{textAlign: 'center'}}>
            <Icon name='home' size={100} color="327CCB" />
          </Text>
          <TextInput
            keyboardType='default'
            style={Styles.default.textbox}
            placeholder='username'
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            keyboardType='default'
            style={Styles.default.textbox}
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button style={styles.button} onPress={this.handleSubmit}>
            Log in
          </Button>
          <Text style={Styles.default.extraInfo}>Don't have an account?</Text>
          <Button style={Styles.default.btn} onPress={this.props.gotoSignup}>
            Sign Up
          </Button>
        </View>);
  },

  handleSubmit() {
    var data = {username: this.state.username, password: this.state.password};
    this.props.submit(data);
  },

});

module.exports = Login;

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
