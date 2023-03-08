const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  return isEqual
    ? console.log(`🟢Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = function (arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) return [];
  if (arr.length % 2 !== 0) return [arr[middleIndex]];
  if (arr.length % 2 === 0) return [arr[middleIndex - 1], arr[middleIndex]];
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([6, 8, 3, 7, 10, 5, 1])); // => [7]


const testArray1 = [1, 2, 9, 8, 4, 3]
assertArraysEqual(middle(testArray1), [9, 8]) // => "Assertion Passed: [9, 8] === [9, 8]"

const testArray2 = [6, 1, 4, 5, 8, 10, 3];
assertArraysEqual(middle(testArray2), [5]); // => "Assertion Passed: [5] === [5]"

const testArray3 = [3, 4, 6, 7, 9, 10];
assertArraysEqual(middle(testArray3), [6]); // => "Assertion Failed: [6, 7] !== [6]"

