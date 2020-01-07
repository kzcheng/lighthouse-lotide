// [FUNCTION IMPLEMENTATION]
const eqArrays = function(a1, a2) {
  // Check
  if (a1.length !== a2.length) {
    return false;
  }
  

};

// [TEST CODE]
eqArrays([1, 2, 3], [1, 2, 3]); // true
eqArrays([1, 2, 3], [3, 2, 1]); // false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // false