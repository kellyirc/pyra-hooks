const _ = require('lodash');
const dep = require('./_dep');

module.exports = function(context, cb) {
  cb(null, {
    message: _.toLower(dep.string + ' Wow!')
  });
}
