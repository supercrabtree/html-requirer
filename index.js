'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function requireHtml(file) {

  var dirRequiredFrom = path.dirname(module.parent.filename);

  var absolutePath = path.resolve(dirRequiredFrom, file);

  return fs.readFileSync(absolutePath).toString();
}
