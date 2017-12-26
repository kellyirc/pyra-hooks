const sample = require('lodash.sample');

module.exports = function(context, cb) {
  cb(null, { body: [
    { message: 'THINK YOU CAN TAKE ME?' }  
  ]});
};