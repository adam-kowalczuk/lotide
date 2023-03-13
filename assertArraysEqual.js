const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  //A variable with the return value of eqArrays, a function that evaulates whether two arrays are equal
  const isEqual = eqArrays(arr1, arr2);
  //Testing whether the result of isEqual matches an assertion
  return isEqual
    ? `🟢Assertion Passed: ${arr1} === ${arr2}`
    : `🔴Assertion Failed: ${arr1} !== ${arr2}`;
};

module.exports = assertArraysEqual;