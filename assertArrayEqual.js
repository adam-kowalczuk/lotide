const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  return isEqual 
  ? console.log(`🟢Assertion Passed: ${arr1} === ${arr2}`) 
  : console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
}

assertArrayEqual([3, 2, 1], [3, 2, 1, 8]); 
assertArrayEqual([3, 2, 1], [3, 2, 1]); 
assertArrayEqual([3, 2, 1], [1, 2, 3]); 