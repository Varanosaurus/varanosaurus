
var {StyleSheet} = require('react-native');

var Styles = {};

var primaryColor = '#A6B6B9';
var accentColor = '#CC5251';
var secondaryColor = '#323232';
// var neutralColor = 'rgb(92, 87, 93)';
var mainFont = 'Heiti TC';
var titleFont = 'Josefin Sans';
var kneadFont = 'Lobster';

Styles.addItemButtonIconColor = secondaryColor;
Styles.iconColor = accentColor;
Styles.secondaryColor = secondaryColor;
Styles.listRowIsTouchedColor = '#CFD8DC';
Styles.mainFont = mainFont;
Styles.titleFont = titleFont;
Styles.kneadFont = kneadFont;
Styles.accentColor = accentColor;

Styles.patternURI = 'https://s-media-cache-ak0.pinimg.com/736x/76/e7/67/76e767dbeaad4e6eb37a23698170e006.jpg';

var imageURIs = [
  'https://s-media-cache-ak0.pinimg.com/736x/31/de/02/31de023159a3cc9b021c7331e4359738.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/d5/15/09/d51509c9bafcc89c09bcadc11298f115.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/b8/3f/3c/b83f3ce2b06d4044c6c2ca7a5085ec22.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/8f/45/13/8f4513a8d9225cd537580f9d688ef76c.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/de/fa/a8/defaa82a39734e87ecf0e5eec146a0d3.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/56/82/bf/5682bfdf326273cbbcaf9ea66d0391b5.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/12/ae/77/12ae7709c175c4e8e68e6223d7ac3b81.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/0a/9c/8c/0a9c8c1cb51da23bc37f825a40fafa6f.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/64/be/6e/64be6e150dcdd6af48687ad4c3e24f63.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/0d/25/2f/0d252f1d75a894d3486fa9df0f00407b.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/31/59/a0/3159a048ff333683a373bc6537ecb3a7.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/08/be/99/08be993f205f517ea7b76ffd681f6c19.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/ad/0d/11/ad0d1165a1497c01bbf74568643708f8.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/5b/22/05/5b2205d551cab819062389c025051d4b.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/e5/0f/cf/e50fcf9491e16b1e62d91a8805c76d4a.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/7a/75/17/7a75170fd17b8929609f05ee97309699.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/54/8e/ea/548eea7c9647dc098c3989c33b1f2332.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/62/5a/78/625a78b41263d6734374c941b7799138.jpg',
  'http://blogof.francescomugnai.com/wp-content/uploads/2014/06/door_cool.jpg',
  'http://blogof.francescomugnai.com/wp-content/uploads/2014/06/red.jpg',
  'http://blogof.francescomugnai.com/wp-content/uploads/2014/06/metz.jpg',
];

Styles.imageURI = imageURIs[Math.floor(Math.random() * imageURIs.length)];

Styles.background = StyleSheet.create({
  navbarArea: {
    flex: 1,
    marginTop: 20,
  },
  belowNavbarArea: {
    flex: 1,
    resizeMode: 'cover',
  },
  transparentBackground: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  authArea: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    margin: 20,
    marginTop: 150,
  },
});

Styles.navbar = StyleSheet.create({
  container: {
    borderColor: secondaryColor,
    backgroundColor: primaryColor,
  },
});

Styles.default = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    // backgroundColor: primaryColor,
  },
  title: {
    fontFamily: titleFont,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  knead: {
    fontFamily: kneadFont,
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  subheading: {
    fontFamily: mainFont,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  label: {
    fontFamily: mainFont,
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  text: {
    fontFamily: mainFont,
    fontSize: 18,
    textAlign: 'left',
  },
});

Styles.alert = StyleSheet.create({
  info: {
    fontFamily: mainFont,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 6,
    textAlign: 'center',
    color: 'white',
  },
  infoLeft: {
    fontFamily: mainFont,
    fontSize: 14,
    margin: 10,
    textAlign: 'left',
    color: accentColor,
  },
  error: {
    fontFamily: mainFont,
    fontSize: 14,
    marginLeft: 10,
    textAlign: 'center',
    color: 'red',
  },
});

Styles.input = StyleSheet.create({
  textboxLabel: {
    fontFamily: mainFont,
    fontSize: 15,
    color: secondaryColor,
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
  textboxField: {
    marginLeft: 30,
    marginRight: 30,
    color: 'black',
    fontSize: 17,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: secondaryColor,
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  textboxDetails: {
    backgroundColor: 'white',
    fontSize: 15,
    marginLeft: 30,
    marginRight: 30,
    height: 150,
    borderRadius: 5,
    borderColor: '#323232',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 15,
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 10,
  },
});

Styles.btn = StyleSheet.create({
  btn: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: primaryColor,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  accentBtn: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: accentColor,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  floatBtn: {
    position: 'absolute',
    bottom: 75,
    right: 25,
    overflow: 'hidden',
  },
});

Styles.page = StyleSheet.create({
  pageTitle: {
    fontFamily: titleFont,
    backgroundColor: accentColor,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 37,
    color: 'white',
    textAlign: 'center',
  },
  pendingTitle: {
    fontFamily: titleFont,
    backgroundColor: '3d4e5b',
    paddingTop: 6,
    paddingBottom: 3,
    fontSize: 37,
    color: 'white',
    textAlign: 'center',
  },
  boughtTitle: {
    fontFamily: titleFont,
    backgroundColor: '3d4e5b',
    paddingTop: 6,
    paddingBottom: 3,
    fontSize: 37,
    color: 'white',
    textAlign: 'center',
  },
  boughtBy: {
    margin: 20,
    paddingTop: 15,
    fontFamily: mainFont,
    fontSize: 24,
    textAlign: 'center',
    color: secondaryColor,
  },
  boughtDetails: {
    margin: 20,
    fontFamily: mainFont,
    fontSize: 24,
  },
  boughtDollar: {
    margin: 20,
    fontFamily: mainFont,
    fontSize: 70,
  },
  boughtItemDetailsContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: primaryColor,
  },
  priceBox: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    height: 150,
    borderRadius: 5,
    backgroundColor: primaryColor,
    borderColor: primaryColor,
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

Styles.reckoningTotals = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: 'black',
    opacity: .7,
    padding: 10,
  },

  name: {
    flex: .6,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  nameText: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 0,
  },

  row: {
    flexDirection: 'row',
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 9,
    paddingBottom: 7,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },

  text: {

  },

  numbers: {
    margin: 3,
  },

  number: {
    fontSize: 21,
  },

  numbersContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },

  contributed: {
    textAlign: 'right',
  },

  owes: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'right',
  },

  owed: {
    color: 'green',
    alignSelf: 'center',
    textAlign: 'right',
  },
});

Styles.reckoningPayments = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 64,
    backgroundColor: 'black',
    opacity: .7,
    marginBottom: 48,
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 15,
    flexDirection: 'column',
  },

  list: {
    flex: 6,
    height: 450,
  },

  row: {
    flex: 1,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0,
  },

  text: {
    flex: 1,
    color: 'black',
    fontSize: 20,
  },

  amount: {
    color: '#FF4500',
  },

  button: {
    flex: 1,
    backgroundColor: accentColor,
  },
});

Styles.list = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    // backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingLeft: 15,
    paddingTop: 9,
    paddingBottom: 7,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: primaryColor,
    backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  label: {
    fontFamily: mainFont,
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
});

module.exports = Styles;

