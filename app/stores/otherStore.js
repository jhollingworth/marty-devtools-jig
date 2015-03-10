var Marty = require('marty');
var _ = require('lodash');
var TestConstants = require('../constants/testConstants');

var OtherStore = Marty.createStore({
  id: 'OtherStore',
  getInitialState: function () {
    return [];
  },
  getById: function (id) {
    return _.find(this.state, {
      id: id
    });
  },
  handlers: {
    multipleStores: TestConstants.MULTIPLE_STORES,
    multipleComponents: TestConstants.MULTIPLE_COMPONENTS,
  },
  multipleStores: addData,
  multipleComponents: addData
});

function addData() {
  var data = {
    id: _.uniqueId(),
    type: this.action.type,
    arguments: _.toArray(arguments)
  };

  this.state.push(data);
  this.hasChanged(data);
}

module.exports = OtherStore;