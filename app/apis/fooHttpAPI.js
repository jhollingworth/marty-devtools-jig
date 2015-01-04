var Marty = require('marty');
var FooServerActionCreators = require('../actions/fooServerActionCreators');

var FooHttpAPI = Marty.createHttpAPI({
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