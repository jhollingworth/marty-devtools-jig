/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty');
var Other = require('./other');
var FooStore = require('../stores/fooStore');
var TestStore = require('../stores/testStore');
var OtherStore = require('../stores/otherStore');

var MultiTestStateMixin = Marty.createStateMixin({
  listenTo: [FooStore, TestStore, OtherStore],
  getState: function () {
    return {
      foos: FooStore.getAll(),
      tests: TestStore.getState(),
      others: OtherStore.getState()
    };
  }
});

var MultiTest = React.createClass({
  mixins: [MultiTestStateMixin],
  render: function () {
    return (
      <div className='multi-test' style={{display: 'none'}}>
        <div className='foos'>
          {this.state.foos.map(function (foo) {
            return <div className='foo' key={foo.id}>{foo.id}</div>;
          })}
        </div>
        <div className='tests'>
          {this.state.tests.map(function (test) {
            return <div className='test' key={test.id}>{test.id}</div>;
          })}
        </div>
        <div className='others'>
          {this.state.others.map(function (other) {
            return <Other key={other.id} id={other.id} />;
          })}
        </div>
      </div>
    );
  }
});

module.exports = MultiTest;

