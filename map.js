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
  const isEqual = eqArrays(arr1, arr2);
  return isEqual
    ? console.log(`🟢Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];
const numStr = ['1', '2', '3', '4', '5', '6'];


const map = function(array, callback) {
  const results = [];
  //For-of-loop that loops through the array passed in as the first argument.
  for (let item of array) {
    //Each item is passed the callback function, then pushed to the result array. 
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number * 2);
const results3 = map(numStr, str => Number(str));

console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual((results1), ['g', 'c', 't', 'm', 't']);
assertArraysEqual((results2), [ 2, 4, 6, 8, 10, 12 ]);
assertArraysEqual((results3), [ 1, 2, 3, 4, 5, 6 ]);
