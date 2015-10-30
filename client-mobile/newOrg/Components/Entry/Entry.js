'use strict';

var React = require('react-native');
var {connect} = require('react-redux');

var Actions = require('../../Actions/Actions');

var Login = require('./dumb/Login');
var Signup = require('./dumb/Signup');

var Entry = React.createClass({

  getInitialState() {
    return ({
       error: '',
    });
  },

  render() {
    return this.props.entryMode === 'signup'
      ? this.renderSignup()
      : this.renderLogin();
  },

  renderLogin() {
    return (
      <Login
          errorHandling={this.state.error}
          submit={this.handleLogin}
          gotoSignup={this.gotoSignup}
      />
    );
  },

  renderSignup() {
    return (
      <Signup
        errorHandling={this.state.error}
        submit={this.handleSignup}
        gotoLogin={this.gotoLogin}
      />
    );
  },

  handleLogin(data) {
    // dispatch action to store causing verification of user input
    var self = this;
    self.props.dispatch(Actions.login(data.username, data.password))
      .then(function(result) {
        if (result.type === 'LOGIN_FAILURE') {
          self.setState({
            error: 'Invalid username and/or password. Please try again.',
          });
        }
      });
  },

  handleSignup(data) {
    //Error handling
    if (data.username.length === 0 && data.password.length === 0) {
      this.setState({
        error: 'Please provide a username between 4 and 12 characters. Please provide a password that is between 6 and 28 characters.',
      });
    } else if (data.username.length < 4 || data.username.length > 20) {
      this.setState({
        error: 'Please provide a username between 4 and 12 characters.',
      });
    } else if (data.password.length < 6 || data.username.password > 28) {
      this.setState({
        error: 'Please provide a password between 6 and 28 characters.',
      });
    } else {
      // dispatch action to store causing creation of new user
      this.props.dispatch(Actions.signup(data.username, data.password));
    }
  },

  gotoLogin() {
    // dispatch action to store to change
    // state.entryMode -> 'login'
    this.props.dispatch(Actions.setEntryMode('login'));
  },

  gotoSignup() {
    // dispatch action to store to change
    // state.entryMode -> 'signup'
    this.props.dispatch(Actions.setEntryMode('signup'));
  },

});

function select(state) {
 return {entryMode: state.uiMode.entryMode};
}

module.exports = connect(select)(Entry);
