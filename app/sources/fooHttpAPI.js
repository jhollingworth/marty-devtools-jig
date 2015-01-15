var Marty = require('marty');
var FooSourceActionCreators = require('../actions/fooSourceActionCreators');

var FooHttpAPI = Marty.createStateSource({
  type: "http",
  getById: function (id) {
    return this.get('/api/foos/' + id).then(function (foo) {
      return FooServerActionCreators.addFoo(foo);
    });
  },
  createFoo: function (foo) {
    return this.post('/api/foos', { body: foo }).then(function (foo) {
      return FooServerActionCreators.addFoo(foo);
    });
  },
  deleteFoo: function (foo) {
    return this.post('/api/foos');
  }
});

module.exports = FooHttpAPI;