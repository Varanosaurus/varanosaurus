'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
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
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.btnText}>Log in</Text>
          </TouchableHighlight>

          <Text>Don't have an account?</Text>
          <TouchableHighlight style={styles.button} onPress={this.props.gotoSignup}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableHighlight>
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
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    // position: 'absolute',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  errorHandling: {
    color: 'red',
  },
});
