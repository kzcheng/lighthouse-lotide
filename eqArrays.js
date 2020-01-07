// [FUNCTION IMPLEMENTATION]
const eqArrays = function(a1, a2) {
  // Check
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

// [TEST CODE]
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // false