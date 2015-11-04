'use strict';

var React = require('react-native');
var Styles = require('../../Styles/Styles');
var Button = require('react-native-button');

var {
  Image,
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
        <View style={Styles.background.navbarArea}>
          <Image
            source={{uri: Styles.imageURI}}
            style={Styles.background.belowNavbarArea}>
            <View style={Styles.background.transparentBackground}>
            <View style={Styles.background.authArea}>
              <Text style={Styles.default.title}>Knead</Text>
              <TextInput
                keyboardType='default'
                style={[Styles.input.textboxField, {marginTop: 10}, {color: 'white'}, {borderColor: 'white'}]}
                placeholder='username'
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                placeholderTextColor={'white'}
              />
              <TextInput
                keyboardType='default'
                style={[Styles.input.textboxField, {color: 'white'}, {borderColor: 'white'}]}
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholderTextColor={'white'}
              />
              <Text style={Styles.alert.error}>{this.props.errorHandling}</Text>
              <Button style={Styles.btn.btn} onPress={this.handleSubmit}>
                Log in
              </Button>
              <Text style={Styles.alert.info}>Don't have an account?</Text>
              <Button style={Styles.btn.btn} onPress={this.props.gotoSignup}>
                Sign Up
              </Button>
            </View>
          </View>
        </Image>
      </View>
    );
  },

  handleSubmit() {
    var data = {username: this.state.username, password: this.state.password};
    this.props.submit(data);
  },

});

module.exports = Login;
