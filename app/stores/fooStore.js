var _ = require('lodash');
var Marty = require('marty');
var FooHttpAPI = require('../apis/fooHttpApi');
var FooConstants = require('../constants/fooConstants');

var FooStore = Marty.createStore({
  name: 'foos',
  handlers: {
    addFoo: FooConstants.ADD_FOO
  },
  getInitialState: function () {
    return {};
  },
  getAll: function () {
    return _.values(this.state);
  },
  addFoo: function (foo) {
    this.state[foo.id] = foo;
    this.hasChanged();
  },
  getById: function (id) {
    return this.fetch(id,
      function () {
        return this.state[id];
      },
      function () {
        return FooHttpAPI.getById(id);
      }
    );
  }
});

module.exports = FooStore;