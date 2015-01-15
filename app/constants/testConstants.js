var Marty = require('marty');

var TestConstants = Marty.createConstants([
  'MULTIPLE_STORES',
  'NO_DISPATCH',
  'PROMISE_THEN_DISPATCH',
  'DISPATCH_THEN_PROMISE',
  'FAIL',
  'PROMISE_FAIL',
  'NO_STORES',
  'ONE_STORE',
  'SINGLE_COMPONENT',
  'MULTIPLE_COMPONENTS',
  'FAIL_IN_ACTION_HANDLER',
  'FAIL_IN_COMPONENT'
]);

module.exports = TestConstants;