// A function that checks the equality of two separate arrays. Loops
// through the first array, which compares whether the
// value in the first array is strictly equal to the same
// value in the second array at the same index.

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;




