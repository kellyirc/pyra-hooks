const random = require('lodash.random');

module.exports = function(context, cb) {

  let start = 1;
  let end = 10;
  let whereWeAre = 0;
  
  let startName = 1;
  let endName = 10;
  let whereWeAreName = 0;

  const allArgs = context.body.split('|');
  if(allArgs.length === 1) {
    if(isNaN(+allArgs[0])) whereWeAre = random(start, end);
    else                   whereWeAre = +allArgs[0];
  }
  
  if(allArgs.length === 2) {
    if(isNaN(+allArgs[0])) { start = 1; startName = allArgs[0]; }
    else                   { start = startName = +allArgs[0]; }
    
    if(isNaN(+allArgs[1])) { end = 10; endName = allArgs[1]; }
    else                   { end = endName = +allArgs[1]; }
  }
  
  if(allArgs.length === 3) {
  
    if(isNaN(+allArgs[0])) { start = 1; startName = allArgs[0]; }
    else                   { start = startName = +allArgs[0]; }
    
    if(isNaN(+allArgs[1])) { end = 10; endName = allArgs[1]; }
    else                   { end = endName = +allArgs[1]; }
    
    if(isNaN(+allArgs[2])) { whereWeAre = random(start, end); whereWeAreName = allArgs[2]; }
    else                   { whereWeAre = whereWeAreName = +allArgs[2]; }
  }
  
  let arr = new Array(end);
  arr[whereWeAre] = '|';
  
  const scale = `On a scale of "${startName}" to "${endName}", "${whereWeAre}" is about right here: [${arr.join(' ')}]`;
  
  cb(null, {
    message: scale
  });
}
