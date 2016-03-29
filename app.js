var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.title = new TitleView();

    this.images = new ImagesView({
      collection: this.collection
    });

    this.photo = new PhotoView();

    this.render();
  },

  render: function() {
    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
      ]);

    return this;
  }

});
