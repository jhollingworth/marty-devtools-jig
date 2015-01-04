/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var routes = [
  <Route name="home" path="/" handler={require('./components/home')} />
];

module.exports = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});