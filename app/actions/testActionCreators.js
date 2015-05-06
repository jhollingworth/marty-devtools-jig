var DELAY = 2000;
var _ = require('lodash');
var Marty = require('marty');
var Immutable = require('immutable');
var TestConstants = require('../constants/testConstants');

var TestActionCreators = Marty.createActionCreators({
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
  },
  immutable: function () {
    var obj = {};

    obj.id = uuid();
    obj.name = 'FOO';

    this.dispatch(TestConstants.IMMUTABLE, Immutable.fromJS(obj));
  }
});

function uuid() {
  return s4() + s4() + s4() + s4();
}


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function argumentsWithType(type, args) {
  args = _.toArray(args);

  args.unshift(type);

  return args;
}

module.exports = TestActionCreators;