//An assertion test that prints the results of the equality of two arrays versus an expected outcome. 

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  //A variable with the return value of eqArrays, a function that evaulates whether two arrays are equal
  const isEqual = eqArrays(arr1, arr2);
  //Testing whether the result of isEqual matches an assertion
  if (isEqual) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

