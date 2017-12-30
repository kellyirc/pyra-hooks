module.exports = function(context, cb) {
  cb(null, {
    message: `${context.body.command} ${context.body.arguments}`
  });
}
