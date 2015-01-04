var Marty = require('marty');
var _ = require('underscore');
var TestConstants = require('../constants/testConstants');

var TestStore = Marty.createStore({
  displayName: 'Test',
  getInitialState: function () {
    return [];
  },
  handlers: {
    oneStore: TestConstants.ONE_STORE,
    multipleStores: TestConstants.MULTIPLE_STORES,
    singleComponent: TestConstants.SINGLE_COMPONENT,
    failInComponent: TestConstants.FAIL_IN_COMPONENT,
    multipleComponents: TestConstants.MULTIPLE_COMPONENTS,
    promiseThenDispatch: TestConstants.PROMISE_THEN_DISPATCH,
    dispatchThenPromise: TestConstants.DISPATCH_THEN_PROMISE,
    failInActionHandler: TestConstants.FAIL_IN_ACTION_HANDLER
  },
  oneStore: addData,
  multipleStores: addData,
  singleComponent: addData,
  failInComponent: addData,
  multipleComponents: addData,
  promiseThenDispatch: addData,
  dispatchThenPromise: addData,
  failInActionHandler: function (arguments) {
    throw new Error('FAILED IN ACTION HANDLER')
  }
})

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