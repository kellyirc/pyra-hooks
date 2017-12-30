module.exports = function(context, cb) {
  cb(null, {
    message: context.body.arguments
  });
}
