// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);

// [Manual Imports]
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

// [Function Implementation]
const eqObjects = function(obj1, obj2) {
  // Check
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
};


// [Testing Code]
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
l(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
l(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
l(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
l(eqObjects(cd, cd2)); // => false