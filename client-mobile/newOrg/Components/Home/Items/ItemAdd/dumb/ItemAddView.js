'use strict';

var React = require('react-native');

var Button = require('react-native-button');

var {
  View,
  Text,
  TextInput,
  SwitchIOS,
  StyleSheet,
} = React;

// TODO: input validation
var ItemAddView = React.createClass({

  getInitialState() {
    return {
      description: '',
      details: '',
      bought: false,
      price: 0,
      error: null,
    };
  },

  render() {
    return (
      <View style={styles.mainSection}>
        <Text>Enter a short description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <Text>Enter any additional details:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(details) => this.setState({details})}
          value={this.state.details}
        />
        <SwitchIOS onValueChange={(bought) => this.setState({bought})} value={this.state.bought} />
        <Text>Already bought</Text>
        {(() => {
            if (this.state.bought) {
              return (
                <View>
                <Text>Price:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType='decimal-pad'
                  onChangeText={(price) => this.setState({price})}
                  value={this.state.price}
                />
                </View>);
            }
                })()}
        <Button style={styles.btn} onPress={this.handleSubmit}>Add item</Button>
        {(() => {
          if (this.state.error !== null) {
            return <Text>{this.state.error}</Text>;
          } else if (this.props.error !== null) {
            return <Text>{this.props.error}</Text>;
          }
        })()}
      </View>
    );

  },

  handleSubmit() {
    if (this.state.description === '') {
      return this.setState({error: 'Please enter a short description of the item.'});
    } else {
      this.setState({error: null});
      this.props.handleSubmit({
        ...this.state,
        price: parseInt(this.state.price * 100, 10),
      });
    }
  },

});

module.exports = ItemAddView;

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
  mainSection: {
    flex: 1,
    marginTop: 64,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
});
