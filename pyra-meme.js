const sample = require('lodash.sample');

const allMemes = [
  'THINK YOU CAN TAKE ME?',
  'I\'LL SHOW YOU A THING OR THREE!',
  'DON\'T FORGET ME!',
  'I\'m really feeling it!',
  'We\'ll beat them with the powre of friendship!',
  'Ready or Gormotti!',
  'MEH-MEH-MEH-MEH-MEH!',
  'Oh, and I\'ve started glowing. I\'m a bit self-conscious...',
  'It\'s blushy-crushy time!'
];

module.exports = function(context, cb) {
  cb(null, [
    { message: sample(allMemes) }  
  ]);
};