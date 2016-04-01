// var images = require('imageInfo').getImageNames();

var AppModel = Backbone.Model.extend({

  defaults: {
    currentImage: '', // should store an instantiated ImageEntryModel
  },

  initialize: function(params) {  // params will be a collection of photos
    this.set('currentImage', new ImageModel());

    this.listenTo('ImageEntryView'); //!!!!!!!!! What am i trying to do

    params.images.on('selectImage', function(image) {
      // listen for trigger of a selectImage
      // change the current photo to new one with set()
      this.set('currentImage', image);
    }, this);
  },


});
