var fs = require('fs');
var path = require('path');

var paths = {
  images: path.join(__dirname, '../../images'),
};

var imageNames = null;

fs.readdir(paths.images, function(err, fileNames) {
  if (err) {
    console.error('error in collecting imageNames:', err);
  }
  console.log(fileNames);
  imageNames = fileNames;
});

console.log(imageNames);
console.log(paths.images);
