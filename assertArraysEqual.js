const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  //A variable with the value of whether two arrays are equal, as compared using the helper function eqArrays
  const isEqual = eqArrays(arr1, arr2);
  //Testing whether the result of isEqual matches an assertion
  return isEqual
    ? console.log(`🟢Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([3, 2, 1], [3, 2, 1, 8]);
assertArraysEqual([3, 2, 1], [3, 2, 1]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);
