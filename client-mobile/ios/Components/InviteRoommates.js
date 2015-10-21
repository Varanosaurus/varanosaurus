var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  TextInput,
  View,
  Text,
} = React;

var InviteRoommates = React.createClass({
  getInitialState: function() {
    return ({
      inputField: [true, true, true],
    });
  },
  addRoommate: function() {
    this.state.inputField.push(true);
    this.setState(this.state.inputField);
  },
  submitRoommates: function() {
    //Note: need to write better logic for error handling. right now if the user deletes all the text in the input fields, they won't get the error
    if (this.state.input === undefined) {
      this.setState({error: 'Please add at least one roommate before submitting'});
    }
    // the below code is a "hack" but react-native doesn't currently support optimally otherwise
    // this.props.navigator.popToRoute(this.props.navigator.getCurrentRoutes()[1]);
  },
  render: function() {
    var inputFields = this.state.inputField;
    return (
      <View style={styles.container}>
          {inputFields.map(function() {
            return (<TextInput
                      style={styles.input}
                      keyboardType='default'
                      placeholder="roommate's email address"
                      onChangeText={(input) => this.setState({input: input})}
                    />);
           })
          }
        <Text
          style={styles.hyperLink}
          onPress={this.addRoommate}
        >
          Invite more
        </Text>
        <Text style={styles.errorHandling}>{this.state.error}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.submitRoommates()}
        >
          <Text style={styles.btnText}>Invite Roommates</Text>
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

module.exports = InviteRoommates;
