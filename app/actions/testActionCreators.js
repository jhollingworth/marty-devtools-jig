var DELAY = 2000;
var Marty = require('marty');
var delay = require('when/delay');
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
  promiseThenDispatch: TestConstants.PROMISE_THEN_DISPATCH(function (foo, bar) {
    console.log('PROMISE_THEN_DISPATCH', arguments);

    return delay(DELAY).then((function () {
      this.dispatch.apply(this, arguments);
    }).bind(this));
  }),
  dispatchThenPromise: TestConstants.DISPATCH_THEN_PROMISE(function (foo, bar) {
    this.dispatch.apply(this, arguments);

    return delay(DELAY);
  }),
  fail: TestConstants.FAIL(function (foo, bar) {
    console.log('FAIL', arguments);
    throw new Error('FAILED IN ACTION CREATOR');
  }),
  promiseFail: TestConstants.PROMISE_FAIL(function (foo, bar) {
    console.log('PROMISE_FAIL', arguments);

    return delay(DELAY).then(function () {
      throw new Error('FAILED IN PROMISE');
    });
  }),
  noStores: TestConstants.NO_STORES(function (foo, bar) {
    console.log('NO_STORES', arguments);
    this.dispatch.apply(this, arguments);
  }),
  oneStore: TestConstants.ONE_STORE(function (foo, bar) {
    console.log('ONE_STORE', arguments);
    this.dispatch.apply(this, arguments);
  }),
  multipleStores: TestConstants.MULTIPLE_STORES(function (foo, bar) {
    console.log('MULTIPLE_STORES', arguments);
    this.dispatch.apply(this, arguments);
  }),
  singleComponent: TestConstants.SINGLE_COMPONENT(function (foo, bar) {
    console.log('SINGLE_COMPONENT', arguments);
    this.dispatch.apply(this, arguments);
  }),
  multipleComponents: TestConstants.MULTIPLE_COMPONENTS(function (foo, bar) {
    console.log('MULTIPLE_COMPONENTS', arguments);
    this.dispatch.apply(this, arguments);
  }),
  failInActionHandler: TestConstants.FAIL_IN_ACTION_HANDLER(function (foo, bar) {
    console.log('FAIL_IN_ACTION_HANDLER', arguments);
    this.dispatch.apply(this, arguments);
  }),
  failInComponent: TestConstants.FAIL_IN_COMPONENT(function (foo, bar) {
    console.log('FAIL_IN_COMPONENT', arguments);
    this.dispatch.apply(this, arguments);
  })
});

module.exports = TestActionCreators;