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

//^^^ Code used for assertion tests. See assertArraysEqual.js and eqArrays.js for detailed descriptions.

const takeUntil = function(array, callback) {
  let results = [];
  //Looping through the array passed in as the first argument
  for (const item of array) {
    //If the value returned by the callback function is truthy, break the loop.
    if (callback(item)) {
      break;
    }
    //Until then, push each item in the array into the results.
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//Assertion tests//

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);



