// [FUNCTION IMPLEMENTATION]
const flatten = function(source) {

  let returnObj = [];

  for (const ele of source) {
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

// [Export]
module.exports = flatten;