var React = require('react');
var Marty = require('marty');
var FooStore = require('../stores/fooStore');

var FooState = Marty.createStateMixin({
  listenTo: [FooStore],
  getState: function () {
    return {
      foo: FooStore.getById(this.props.id)
    };
  }
});

var Foo = React.createClass({
  mixins: [FooState],
  render: function () {
    return this.state.foo.when({
      pending: function () {
        return <div className='loading'>Loading</div>;
      },
      error: function (error) {
        return <div className='error'>{error.message}</div>;
      },
      done: function (foo) {
        return <div className='foo'>{foo}</div>;
      }
    });
  }
});

module.exports = Foo;