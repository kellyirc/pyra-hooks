const sample = require('lodash.sample');

module.exports = function(context, cb) {
  const options = context.body.arguments
    .trim()
    .split(/\s+(?:or|\|)\s+/g);

  cb(null, {
    message: `I choose... ${sample(options)}`
  });
};
