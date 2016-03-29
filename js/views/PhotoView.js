

var PhotoView = Backbone.View.extend({

  template: _.template('<image src=<%= src =%> ></image>'),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var photo = this.template({
      src: this.model.get('current'),
      // title: this.modle.get('currentTitle')
    });
  },
});



// toggle image based on click on model
// the click on the image elt will trigger a rerender on the photoView
