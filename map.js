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

// [Testing Code]
const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, name => name.length));
const results1 = map(words, word => word[0]);
console.log(results1);
