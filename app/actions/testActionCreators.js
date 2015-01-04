var Marty = require('marty');
var FooHttpAPI = require('../apis/fooHttpAPI');
var FooConstants = require('../constants/fooConstants');
var TestConstants = require('../constants/testConstants');

var TestActionCreators = Marty.createActionCreators({
  createFoo: FooConstants.CREATE_FOO(function (foo) {
    return FooHttpAPI.createFoo(foo);
  }),
  noDispatch: TestConstants.NO_DISPATCH(function (foo, bar) {
    console.log('NO_DISPATCH', arguments);
  }),
  dispatch: TestConstants.DISPATCH(function (foo, bar) {
    console.log('DISPATCH', arguments);
  }),
  promiseThenDispatch: TestConstants.PROMISE_THEN_DISPATCH(function (foo, bar) {
    console.log('PROMISE_THEN_DISPATCH', arguments);
  }),
  dispatchThenPromise: TestConstants.DISPATCH_THEN_PROMISE(function (foo, bar) {
    console.log('DISPATCH_THEN_PROMISE', arguments);
  }),
  fail: TestConstants.FAIL(function (foo, bar) {
    console.log('FAIL', arguments);
  }),
  promiseFail: TestConstants.PROMISE_FAIL(function (foo, bar) {
    console.log('PROMISE_FAIL', arguments);
  }),
  noStores: TestConstants.NO_STORES(function (foo, bar) {
    console.log('NO_STORES', arguments);
  }),
  oneStore: TestConstants.ONE_STORE(function (foo, bar) {
    console.log('ONE_STORE', arguments);
  }),
  multipleStores: TestConstants.MULTIPLE_STORES(function (foo, bar) {
    console.log('MULTIPLE_STORES', arguments);
  }),
  singleComponent: TestConstants.SINGLE_COMPONENT(function (foo, bar) {
    console.log('SINGLE_COMPONENT', arguments);
  }),
  multipleComponents: TestConstants.MULTIPLE_COMPONENTS(function (foo, bar) {
    console.log('MULTIPLE_COMPONENTS', arguments);
  }),
  failInActionHandler: TestConstants.FAIL_IN_ACTION_HANDLER(function (foo, bar) {
    console.log('FAIL_IN_ACTION_HANDLER', arguments);
  }),
  failInComponent: TestConstants.FAIL_IN_COMPONENT(function (foo, bar) {
    console.log('FAIL_IN_COMPONENT', arguments);
  })
});

module.exports = TestActionCreators;