var images = new ImagesCollection(mockImages);

var app = new AppView({
  model: new AppModel({images: images}),
});

