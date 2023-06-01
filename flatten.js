const flatten = function(arr) {
  let result = [];
  arr.forEach((item) => {
    //If item is an array
    if (Array.isArray(item)) {
      //Use recursion and concatenate it to result array
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

module.exports = flatten;

//TESTS

const assertArraysEqual = require("./assertArraysEqual");

const arr1 = [1, 2, [3, 4], 5, [6]];

console.log(flatten(arr1)); // -> [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten(arr1), [1, 2, 3, 4, 5, 6]); // Assertion Passed
