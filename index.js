var fs = require('fs');
var path = require('path');
var extend = require('extend-shallow');
var sdl = {};

var files = fs.readdirSync(path.join(__dirname, 'lib', 'sdl'));
var loaded;
for (var i in files) {
  loaded = null;
  try {
    loaded = require('./lib/sdl/' + files[i]);
  }
  catch (e) {
    console.log(e);
    continue;
  }

  if (loaded.CONSTANTS) {
    extend(sdl, loaded.CONSTANTS['']);
    delete loaded.CONSTANTS;
  }
  if (loaded.functions) {
    extend(sdl, loaded.functions);
    delete loaded.functions;
  }
  extend(sdl, loaded);
}

module.exports = extend(sdl, require('./constants.js'));

