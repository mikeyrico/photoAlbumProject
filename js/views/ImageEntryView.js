var ImageEntryView = Backbone.View.extend({

  className: 'imageEntry',

  template: _.template('<p data-path="<%= src =%>" ><%= title =%></p>'),

  events: {
    'click': 'clickAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var imageEntry = this.template({
      title: this.model.get('title'),
      src: this.model.get()
    });

    this.$el.html(entry);
  },

  clickAction: function(e) {
    var path = e.target.getAttr('data-path');
    this.trigger('selectImage', path); // a change of state on photo // TO DO
  },

});
