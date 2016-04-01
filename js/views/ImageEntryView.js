var ImageEntryView = Backbone.View.extend({

  className: 'imageEntry',

  tagName: 'li',
  // don't appear to need template here
  // template: _.template(
  //   `<tr>
  //     <td><%= title =%></td>
  //   </tr>`
  //   ),

  // click handler being handled on collection, see click action below
  // events: {
  //   'click': 'clickAction',
  // },

  initialize: function() {
    this.render();
  },

  render: function() {
    $el.text(this.model.get('title'));
    return this;
  },

  // clickAction: function(e) {
  //   this.trigger('selectImage', this);
  //   // var path = e.target.getAttr('data-path');
  //   // this.trigger('selectImage', path); // a change of state on photo // TO DO
  // },

});
