const flatten = function(arr) {
  const flattenedArr = [];
  // Loop through the array passed into the function
  for (const element of arr) {
    // If an element is an array,
    if (Array.isArray(element)) {
      // Loop through the element array,
      for (const subElement of element) {
        // And push its subElements to flattenedArr
        flattenedArr.push(subElement);
      }
      // If element is NOT an array, simply push the current element to flattenedArr
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

module.exports = flatten;


//TESTS

const assertArraysEqual = require('./assertArraysEqual');

const arr1 = [1, 2, [3, 4], 5, [6]];
console.log(flatten(arr1)); // -> [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten(arr1), [1, 2, 3, 4, 5, 6]); // Assertion Passed