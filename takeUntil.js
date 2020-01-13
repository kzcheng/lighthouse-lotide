// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);

// [Manual Imports]
// Empty


// [Function Implementation]
const takeUntil = function(array, callback) {
  let returnArray = [];
  for (const element of array) {
    if (callback(element)) {
      return returnArray;
    }
    returnArray.push(element);
  }
  return returnArray;
};

// [Export]
module.exports = takeUntil;