

var ImageEntry = Backbone.Model.extend({
  defaults: {
    title: '',
    rating: 0, // int 0-4
    src: '',
  },

  selectImage: function() {
    this.trigger('selectImage', this); // this passes this image entry to set as current on AppModel
  },

  setRating: function() {

  },


});
