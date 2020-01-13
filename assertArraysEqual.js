// [Imports]
const eqArrays = require('./eqArrays');

// [Function Implementation]
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

// [Export]
module.exports = assertArraysEqual;