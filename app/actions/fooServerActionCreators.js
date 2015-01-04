var Marty = require('marty');
var FooConstants = require('../constants/fooConstants');

var FooServerActionCreators = Marty.createActionCreators({
  addFoo: FooConstants.ADD_FOO(function (foo) {
    this.dispatch(foo);
  })
});

module.exports = FooServerActionCreators;