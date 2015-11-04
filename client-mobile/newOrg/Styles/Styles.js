
var {StyleSheet} = require('react-native');

var Styles = {};

var primaryColor = '#CFD8DC';
var accentColor = '#E65100';
var secondaryColor = '#546E7A';
// var neutralColor = 'rgb(92, 87, 93)';
var mainFont = 'Heiti TC';

Styles.iconColor = accentColor;
Styles.secondaryColor = secondaryColor;
Styles.mainFont = mainFont;

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
  'https://s-media-cache-ak0.pinimg.com/736x/28/bf/b7/28bfb78867de8c0cc0023d28aefb99c4.jpg',
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    margin: 20,
    marginTop: 150,
  },
});

Styles.navbar = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
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
    fontFamily: mainFont,
    fontSize: 50,
    fontWeight: 'bold',
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
});

Styles.alert = StyleSheet.create({
  info: {
    fontFamily: mainFont,
    fontSize: 14,
    marginLeft: 10,
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
    fontSize: 20,
    color: primaryColor,
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  textboxField: {
    marginLeft: 10,
    marginRight: 10,
    color: '#00000',
    fontSize: 17,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: secondaryColor,
    borderWidth: 1,
    marginBottom: 5,
  },
});

Styles.btn = StyleSheet.create({
  btn: {
    margin: 10,
    backgroundColor: secondaryColor,
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
  floatBtn: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    // borderRadius: 35,
  },
});

Styles.page = StyleSheet.create({
  pendingTitle: {
    fontFamily: mainFont,
    fontSize: 39,
    color: 'gray',
  },
  boughtTitle: {
    margin: 20,
    fontFamily: mainFont,
    fontSize: 30,
    color: primaryColor,
  },
  boughtBy: {
    margin: 20,
    fontFamily: mainFont,
    fontSize: 24,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
    padding: 6,
    borderBottomWidth: 1,
    borderColor: primaryColor,
  },
  label: {
    fontFamily: mainFont,
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
});

module.exports = Styles;

