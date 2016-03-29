var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.title = new TitleView();

    this.images = new ImagesView({
      collection: this.collection
    });

    this.photo = new PhotoView(
      model: new);

    this.render();
  },

  render: function() {
    this.$el.append([
      this.title.$el,
      this.images.$el,
      this.photo.$el
      ]);

    return this;
  }

});
