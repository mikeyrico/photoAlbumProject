// var backbone = require('backbone');

var AppView = Backbone.View.extend({

  el: '#app',

  model: AppModel,

  initialize: function(params) {
    // this.title = new TitleView();

    this.inputView = new InputView({model: this});
    console.log(AppView);

    this.imageList = new ImageListView();

    this.photo = new PhotoView();
      // model: this.model.get('currentImage'));

    this.render();

    // LISTEN to change on the model (APP model), and trigger change on
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
