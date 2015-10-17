'use strict';

var React = require('react-native');
var Household = require('./Household');
var Reckoning = require('./Reckoning');
var More = require('./More');
var ItemList = require('./ItemList');

var {
  // StyleSheet,
  TabBarIOS,
  Component,
  View,
  Text,
} = React;

var TabView = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'household'
    }
  },

  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'household'}
          title='Household'
          onPress={ () => {
            this.setState({
              selectedTab: 'household'
            });
          }}
        >
        <ItemList />
        </TabBarIOS.Item>


        <TabBarIOS.Item
          selected={this.state.selectedTab === 'reckoning'}
          title='Reckoning'
          onPress={ () => {
            this.setState({
              selectedTab: 'reckoning'
            })
          }}
        >
        <Reckoning />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          title='More'
          onPress={ () => {
            this.setState({
              selectedTab: 'more'
            })
          }}
        >
        <More />
        </TabBarIOS.Item>

      </TabBarIOS>

      // <View automaticallyAdjustContentInsets={false} style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Hi Goose! Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
});

// var styles = StyleSheet.create({
//   container: {
//     marginTop: 64,
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


module.exports = TabView;
