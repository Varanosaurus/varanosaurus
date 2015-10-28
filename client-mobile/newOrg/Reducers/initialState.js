var state = {

  data: {
    user: null, //{userModel},
    household: null, //{householdModel},
    items: {
      bought: [], //[itemModel],
      pending: [], //[itemModel],
    },
    reckonings: [], /*[
      {
        reckoning: reckoningModel,
        items: [], //only fetch when viewing a reckoning?
        userFigures: [], //same as above
      },
    ],*/
    invitations: {
      sent: [], //[invitationModel],
      received: [], //[invitationModel],
    },
  },

  uiMode: {
    entryMode: 'login', //'signup'
    selectedHomeTab: 'itemsTab', //'reckoningsTab', 'settingsTab'
    itemsViewMode: 'details', //'list'
    itemsFilter: 'pending', //'bought'
    // itemDetails: 'list', //'details', 'add'
    reckoningsViewMode: 'list', //'details'
    selectedReckoning: null, //reckoningId; TODO: rename to reflect that it's an ID?
    selectedItem: null, //itemId; TODO: rename to reflect that it's an ID?
    reckoningsDetailsMode: 'items', //'users'
    reckoningsDetailsItemMode: '',
    reckoningsSelectedItem: null, //itemId; TODO: rename to reflect that it's an ID?
    settingsViewMode: 'options', //'invite'
    homelessViewMode: 'inviteRoommates',
  },

  token: null,

};
