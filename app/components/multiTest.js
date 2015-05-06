var React = require('react');
var Marty = require('marty');
var Other = require('./other');

var MultiTestStateMixin = Marty.createStateMixin({
  listenTo: ['testStore', 'otherStore'],
  getState: function () {
    return {
      tests: this.app.testStore.getState(),
      others: this.app.otherStore.getState()
    };
  }
});

var MultiTest = React.createClass({
  mixins: [MultiTestStateMixin],
  render: function () {
    return (
      <div className='multi-test'>
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

