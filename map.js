// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);

// [Manual Imports]
// Empty


// [Function Implementation]
const map = function(array, callback) {
  let returnArray = [];
  for (const element of array) {
    returnArray.push(callback(element));
  }
  return returnArray;
};

// [Export]
module.exports = map;