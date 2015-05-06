var Marty = require('marty');
var _ = require('lodash');
var TestConstants = require('../constants/testConstants');

var TestStore = Marty.createStore({
  getInitialState: function () {
    return [];
  },
  handlers: {
    oneStore: TestConstants.ONE_STORE,
    multipleStores: TestConstants.MULTIPLE_STORES,
    singleComponent: TestConstants.SINGLE_COMPONENT,
    multipleComponents: TestConstants.MULTIPLE_COMPONENTS
  },
  oneStore: addData,
  multipleStores: addData,
  singleComponent: addData,
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


module.exports = TestStore;