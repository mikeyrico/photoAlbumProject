var InputView = Backbone.View.extend({
  $el: 'form',

  // NOTE: // look up how to use a submit and preventDefault


  initialize: function() {
    var $imageUrl = $('<label>Enter image url: <input type="text" placeHolder="enter image here" /></label>');
    var $imageTitle = $('<label>Title: <input type="text" placeHolder="title" /></lable>');
    var $submit = $('<button>Add image</button>');
    this.render();
  },

  render: function() {
    this.$el.append([
      $imageUrl,
      $imageTitile,
      $submit]);
  },
});
