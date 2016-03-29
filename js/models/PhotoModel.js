// var images = require('imageInfo').getImageNames();

var Photo = Backbone.Model.extend({

  defaults: {
    current: null,
  },

  selectImage: function(path) {
    this.set('current', path);
  },



});
