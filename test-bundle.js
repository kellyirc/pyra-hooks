const _ = require('lodash');
const dep = require('./dep');

module.exports = function(context, cb) {
  cb(null, {
    message: _.toUpper(dep.string)
  });
}
