const minimist = require('minimist');
const stringArgv = require('string-argv');

const fantastical = require('fantastical');

module.exports = function(context, cb) {
  if(/help/.test(context.body.arguments)) {
    return cb(null, {
      message: `Usage: ${context.body.command} <category> <function> [-g <gender>, --gender <gender>] [-m, --allow-multiple-names]`
    });
  }

  const argv = minimist(stringArgv(context.body.arguments), {
    alias: {
      gender: ['g'],
      allowMultipleNames: ['m']
    }
  });
  const category = argv._[0];
  const fn = argv._[0];

  if(argv.gender) {
    return cb(null, {
      message: fantastical[category][fn](argv.gender)
    });
  }
  else {
    return cb(null, {
      message: fantastical[category][fn](argv)
    });
  }
}
