var {StyleSheet} = require('react-native');

var Styles = {};

Styles.default = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 40,
    color: '#327CCB',
    textAlign: 'center',
  },
  subheading: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    textAlign: 'center',
  },
  textboxLabel: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#327CCB',
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  extraInfo: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    marginLeft: 10,
    textAlign: 'center',
    color: '#cccccc',
  },
  alreadyBought: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    margin: 10,
    textAlign: 'left',
    color: '#cccccc',
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  floatView: {
    position: 'absolute',
    // width: 70,
    // height: 70,
    bottom: 80,
    right: 20,
    borderRadius: 35,
  },
<<<<<<< HEAD
  btn: {
    margin: 10,
    backgroundColor: '#327CCB',
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
  textbox: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000000',
    fontSize: 17,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 5,
  },
=======
>>>>>>> 902485301fe82cc66e1985b0846f4be7a4a681b5
});

Styles.navbar = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ACAEB0',
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
    borderColor: '327CCB',
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
});

Styles.page = StyleSheet.create({

});

module.exports = Styles;
