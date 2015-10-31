var store = require('./Store');
var Actions = require('../Actions/Actions');
var {SceneConfigs} = require('react-native').Navigator;

// TODO: decide whether we should always mount smart components within navigator,
// or prefer to mount dumb components with state snatched within route factory (here)

exports.hometab = {
    name: 'hometab',
    component: require('../Components/Home/dumb/HomeTab'),
    title: 'Home',
    props: {},
};

exports.itemAddView = {
  name: 'itemAdd',
  component: require('../Components/Home/Items/ItemAdd/ItemAdd'),
  title: 'Add Item',
  sceneConfig: SceneConfigs.FloatFromBottom,
  props: {},
};

var getBoughtItemDetailsView = exports.getBoughtItemDetailsView = function(item) {
  var state = store.getState();
  var roommates = state.data.roommates;

  var creator;

  var i;

  if (item.addingUserId === state.data.user.id) {
    creator = state.data.user;
  } else {
    for (i = 0; i < roommates.length; i++) {
      if (item.addingUserId === roommates[i].id) {
        creator = roommates[i];
      }
    }
  }

  var props = {
    item,
    creator,
  };

  return {
    name: 'boughtItemDetailsView',
    component: require('../Components/Home/Items/dumb/BoughtItemDetails'),
    title: item.description,
    props,
  };

};

exports.getPendingItemDetailsView = function(item, props) {
  var scene = getBoughtItemDetailsView(item);
  scene.name = 'pendingItemDetailsView';
  scene.component = require('../Components/Home/Items/dumb/PendingItemDetails');

  props = {
    ...scene.props,
    ...props,
  };

  return {
    ...scene,
    props,
  };
};

exports.reckoningDetailsView = {
  name: 'reckoningDetailsView',
  title: 'Reckoning Details',
  component: require('../Components/Home/Reckonings/ReckoningDetails/ReckoningDetails'),
  props: {},
};

exports.inviteRoommatesView = {
  name: 'inviteRoommatesView',
  component: require('../Components/Home/Settings/dumb/InviteRoommates'),
  props: {
    handleInviteRoommates(username) {
      console.log('handleInviteRoommates from Routes being called with: ', username);
      store.dispatch(Actions.addInvitation(username));
    },

    resetSettingsViewMode() {
      store.dispatch(Actions.setSettingsViewMode('options'));
    },

  },
  title: 'Invite roommates',
};
