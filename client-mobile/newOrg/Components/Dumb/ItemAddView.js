'use strict';

var React = require('react-native');
var Styles = require('../../Styles/Styles');

var Button = require('react-native-button');

var {
  View,
  Text,
  TextInput,
  SwitchIOS,
  Image,
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

//            <Text style={Styles.input.textboxLabel}>Enter a Product</Text>
//            <Text style={Styles.input.textboxLabel}>Leave a Memo</Text>
//                    <Text style={Styles.input.textboxLabel}>Enter a Price</Text>
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          source={{uri: Styles.patternURI}}
          style={Styles.background.belowNavbarArea}>
          <View style={[Styles.list.container, {flex: 1, marginTop: 65, backgroundColor: 'rgba(0,0,0,0.7)'}]}>
            <Text style={[Styles.page.pageTitle, {marginBottom: 10}]}>Add an Item</Text>
            <TextInput
              style={Styles.input.textboxField}
              placeholder='Enter a name of the product'
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
            />
            <TextInput
              style={Styles.input.textboxField}
              placeholder='Leave a memo'
              onChangeText={(details) => this.setState({details})}
              value={this.state.details}
            />
            <View style={Styles.default.leftContainer}>
              <Text style={Styles.alert.infoLeft}>Already bought?</Text>
              <SwitchIOS
                style={Styles.default.rightContainer, {margin: 10}}
                onValueChange={(bought) => this.setState({bought})}
                value={this.state.bought}
              />
            </View>
                {(() => {
                    if (this.state.bought) {
                      return (
                        <View>
                        <TextInput
                          style={Styles.input.textboxField}
                          placeholder='Enter a Price'
                          keyboardType='decimal-pad'
                          onChangeText={(price) => this.setState({price})}
                          value={this.state.price}
                        />
                        </View>);
                    }
                })()}
            <Button style={Styles.btn.btn} onPress={this.handleSubmit}>Add item</Button>
            {(() => {
              if (this.state.error !== null) {
                return <Text style={Styles.alert.error}>{this.state.error}</Text>;
              } else if (this.props.error !== null) {
                return <Text style={Styles.alert.error}>{this.props.error}</Text>;
              }
            })()}
          </View>
        </Image>
      </View>
    );

  },

  handleSubmit() {
    if (this.state.description === '') {
      return this.setState({error: 'Please enter a product name of the item.'});
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
