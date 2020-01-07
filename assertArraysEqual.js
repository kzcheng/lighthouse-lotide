// [MANUAL IMPORT]
const eqArrays = function(a1, a2) {
  // Check
  if (!a1 || !a2) {
    return false;
  }

  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
};

// [FUNCTION IMPLEMENTATION]
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

// [TEST CODE]
assertArraysEqual([1,2,3]);