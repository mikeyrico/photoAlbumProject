var fs = require('fs');
var path = require('path');

var paths = {
  images: path.join(__dirname, '../images'),
};


exports.paths = paths;

exports.getImageNames = getImageNames = function () {
  fs.readdir(paths.images, function(err, fileNames) {
    if (err) {
      console.error('error in collecting imageNames:', err);
    }
    console.log(fileNames);
    return fileNames.map(function(fileName) {
      var title = fileName.replace(/[-]/g, ' ').slice(0, fileName.length - 4);
      console.log(title, fileName);
      return {title: title, fileName: fileName};
    });
  });
};

console.log(getImageNames());


