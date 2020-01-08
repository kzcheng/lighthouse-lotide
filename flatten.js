// [FUNCTION IMPLEMENTATION]
const flatten = function(source) {

  let returnObj = [];

  for (const ele of source) {
    // console.log(`Working on ${ele}`);
    // console.log(`ele.isArray: ${ele.isArray}`);
    if (!Array.isArray(ele)) {
      returnObj.push(ele);
    } else {
      for (const eoe of ele) { // eoe: element of element
        returnObj.push(eoe);
      }
    }
  }

  return returnObj;
};

// [TEST CODE]
console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log();