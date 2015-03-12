var _ = require('lodash');
var Marty = require('marty');
var Immutable = require('immutable');
var TestConstants = require('../constants/testConstants');

var ImmutableStore = Marty.createStore({
  id: 'ImmutableStore',
  handlers: {
    addImmutable: TestConstants.IMMUTABLE
  },
  getInitialState: function () {
    return Immutable.Map();
  },
  getById: function (id) {
    return _.find(this.state, {
      id: id
    });
  },
  addImmutable: function (obj) {
    this.state = this.state.set(obj.get('id'), obj);
  }
});

module.exports = ImmutableStore;