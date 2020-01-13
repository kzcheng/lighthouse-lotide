// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);

// [Manual Imports]
const eqArrays = function(a1, a2) {
  // l(a1, a2);

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

// [Function Implementation]
const eqObjects = function(obj1, obj2) {
  // Check
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // l(obj1[key], obj2[key]);
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
};

// [Export]
module.exports = eqObjects;