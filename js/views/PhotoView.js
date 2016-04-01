

var PhotoView = Backbone.View.extend({
  // associate with app model at instantiation of view
  template: _.template('<image src=<%= src =%> ></image>'),

  model: AppModel,

  $imageFooter: $(`<div id="imageFooter"><span>${this.model.get('currentImage').title}</span></div>`),

  $rating: $(
    `<select id="rating">
      <option value="1">1 </option>
      <option value="2">2 </option>
      <option value="3">3 </option>
      <option value="4">4 </option>
      <option value="5">5 </option>
    </select>`
    ),

  initialize: function() {
    this.listenTo(this.model, 'change:currentImage', this.render);  // this shoul listen for the

    $rating.on('change', function(e) {
      var rating = $this.val();
      this.model.get('currentImage').rating = rating;   // !!! intention of + is to have // this does not look right
    });

    this.render();
  },

  render: function() {
    var photo = this.template({
      src: this.model.get('currentImage').src,
      // title: this.modle.get('currentTitle')
    });
    // need to add a multiple select for the rating
    this.$el
      .id('currentImage')      // make sure to add styling to current, mainly size
      .html(photo)
      .append([
        $imageFooter,
        $rating
      ]);             // make it a block element , 45% width, float right
  },                            // recall, if no $el is specified, it defaults to <div> !!!!

});



// toggle image based on click on model
// the click on the image elt will trigger a rerender on the photoView
