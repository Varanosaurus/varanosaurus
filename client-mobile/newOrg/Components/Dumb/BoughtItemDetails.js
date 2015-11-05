'use strict';

var React = require('react-native');
var Styles = require('../../Styles/Styles');
// var Icon = require('react-native-vector-icons/Ionicons');

var {
  StyleSheet,
  View,
  Text,
  Image,
} = React;

var BoughtItemDetails = React.createClass({

  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          source={{uri: Styles.patternURI}}
          style={Styles.background.belowNavbarArea}>
          <View style={{flex: 1, marginTop: 65, backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <Text style={Styles.page.pageTitle}>{this.props.item.description}</Text>
            <Text style={Styles.page.boughtBy} style={stylesheet.requestBoughtBy}>Requested by: {this.props.creator.username}</Text>
            <View style={stylesheet.priceBox}>
              <Text style={stylesheet.priceText}>Bought for</Text>
              <Text style={Styles.page.boughtDollar} style={stylesheet.priceAmount}>${centsToPriceString(this.props.item.price)}</Text>
            </View>
            <View style={Styles.page.boughtItemDetailsContainer}>
              <Text style={Styles.page.boughtDetails}>Details: {this.props.item.details}</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  },

});

function centsToPriceString(cents) {
  return cents.toString().replace(/(\d{2})$/, '.$1');
}

module.exports = BoughtItemDetails;

var stylesheet = StyleSheet.create({
  title: {
    backgroundColor: '#E65100',
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 37,
    color: 'white',
    textAlign: 'center',
  },
  requestBoughtBy: {
    color: '3d4e5b',
    textAlign: 'center',
    paddingTop: 15,
  },
  priceBox: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#00E676',
    borderColor: '#899ea3',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  priceText: {
    paddingTop: 15,
    paddingBottom: 9,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  priceAmount: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },

});
