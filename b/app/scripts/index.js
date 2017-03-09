var $ = require('jquery');

var models = require('./models/models.js');
var views = require('./views/views.js');

$(function(){

  var contactForm = new views.ContactForm(); //instantiante a new contact form
  $('.app').append(contactForm.render().$el);
});
