/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var routes = [
  <Route name="actions" path="/" handler={require('./components/actions')} />
];

module.exports = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});