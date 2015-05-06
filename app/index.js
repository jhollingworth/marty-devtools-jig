var React = require('react');
var Marty = require('marty');
var Router = require('./router');
var Application = require('./application');

window.React = React; // For React DevTools
window.Marty = Marty; // For Marty Developer Tools

var app = new Application();

if (process.env.NODE_ENV !== 'test') {
  Router.run(function (Handler, state) {
    Handler = app.bindTo(Handler);

    React.render(<Handler {...state.params} />, document.getElementById('app'));
  });
}