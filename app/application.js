var _ = require('lodash');
var Marty = require('marty');
var bulk = require('bulk-require');

module.exports = Marty.createApplication(function () {
  _.each(bulk(__dirname, [
    'stores/*.js',
    'actions/*.js'
  ]), this.register, this);
});