var $ = require('jquery');
var Backbone = require('backbone');

var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/checkthisout'
});


module.exports = {
  Blog: Blog
};
