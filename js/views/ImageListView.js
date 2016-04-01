var ImageListView = Backbone.View.extend({
  // this will have a model associated with it, so can access that info on this.model
  el: 'ul',

  model: ImagesCollection,

  events: {
    click: this.handleClick
  },

  initialize: function() {
    this.render();
    this.listenTo('this.model', 'add', this.render());  // renders on add to collection
  },

  render: function() {
    this.$el.html();

    for (var i = 0; i < this.model.length; ++i) {
      var imageview = new imageView({model: this.model.at(i)});
      this.$el.append(imageview);
      imageview.render();
    }
    return this;

  },

  handleClick: function(e) {
    this.model.selectImage();  // go to image model and trigger update on app
  },


});
