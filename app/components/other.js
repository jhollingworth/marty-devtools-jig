var React = require('react');
var Marty = require('marty');

var OtherStateMixin = Marty.createStateMixin({
  listenTo: 'otherStore',
  getState: function () {
    return {
      other: this.app.otherStore.getById(this.props.id)
    };
  }
});

var Other = React.createClass({
  mixins: [OtherStateMixin],
  render: function () {
    return (
      <div className='other' style={{display: 'none'}}>
        {this.state}
      </div>
    );
  }
});

module.exports = Other;