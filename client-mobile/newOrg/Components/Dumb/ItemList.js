'use strict';

var React = require('react-native');
var Styles = require('../../Styles/Styles');
var Icon = require('react-native-vector-icons/Ionicons');

var {
  ListView,
  View,
  SegmentedControlIOS,
  TouchableHighlight,
  Text,
  Image,
} = React;

//TODO: add styles, add addItem functions

var ItemList = React.createClass({

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
  },

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);

    var selectedIndex;

    if (this.props.itemsFilter === 'pending') {
      selectedIndex = 0;
    } else {
      selectedIndex = 1;
    }

    return (
      <View style={{flex: 1}}>
        <Image
          source={{uri: Styles.patternURI}}
          style={Styles.background.belowNavbarArea}>
          <View style={Styles.list.container}>
            <SegmentedControlIOS
              style={{backgroundColor: 'white'}}
              values={['Pending', 'Bought']}
              selectedIndex={selectedIndex}
              tintColor={Styles.secondaryColor}
              onValueChange={(val) => {
                if (val === 'Pending') {
                  this.props.gotoPendingItemsList();
                } else if (val === 'Bought') {
                  this.props.gotoBoughtItemsList();
                }
              }} />
            <ListView
              dataSource={dataSource}
              renderRow={this.renderRow}
              automaticallyAdjustcontentInsets={false}
              showVerticalScrollIndicator={true}
            />
            <TouchableHighlight
              style={Styles.btn.floatBtn}
              underlayColor={'transparent'}
              onPress={this.props.gotoItemAddView} >
              <Icon name='ios-plus' size={70} color={Styles.addItemButtonIconColor} />
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  },

  renderRow(item) {
    return (
        <TouchableHighlight
          style={Styles.list.rowContainer}
          underlayColor={Styles.listRowIsTouchedColor}
          onPress={() => this.props.gotoItemDetailsView(item)} >
          <View style={Styles.list.row}>
            <Text style={Styles.list.label}>{item.description}</Text>
            <View style={Styles.list.rightContainer}>
              <Icon name='ios-arrow-right' size={20} color={Styles.accentColor} />
            </View>
          </View>
        </TouchableHighlight>
    );

  },

});

module.exports = ItemList;
