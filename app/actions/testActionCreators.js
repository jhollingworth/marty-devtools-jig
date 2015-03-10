var DELAY = 2000;
var _ = require('lodash');
var Marty = require('marty');
var TestConstants = require('../constants/testConstants');

var TestActionCreators = Marty.createActionCreators({
  id: 'TestActionCreators',
  simple: function () {
    console.log('SIMPLE', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.SIMPLE, arguments));
  },
  noStores: function () {
    console.log('NO_STORES', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.NO_STORES, arguments));
  },
  oneStore: function () {
    console.log('ONE_STORE', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.ONE_STORE, arguments));
  },
  multipleStores: function () {
    console.log('MULTIPLE_STORES', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.MULTIPLE_STORES, arguments));
  },
  singleComponent: function () {
    console.log('SINGLE_COMPONENT', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.SINGLE_COMPONENT, arguments));
  },
  multipleComponents: function () {
    console.log('MULTIPLE_COMPONENTS', arguments);
    this.dispatch.apply(this, argumentsWithType(TestConstants.MULTIPLE_COMPONENTS, arguments));
  }
});

function argumentsWithType(type, args) {
  args = _.toArray(args);

  args.unshift(type);

  return args;
}

module.exports = TestActionCreators;