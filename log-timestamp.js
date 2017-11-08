var util = require('util');

var logprefix = require('log-prefix');

module.exports = patch;

patch(); // patch when require'd

function patch(fn) {
  logprefix(fn || timestamp);
}

// the default date format to print
function timestamp() {
  let d = new Date();
  d.setSeconds(0,0);
  return '[' + d.toUTCString() + ']';
}
