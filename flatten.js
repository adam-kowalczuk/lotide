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

//^^^ Code for testing equality between two arrays. Please look at asserArraysEqual.js and eqArrays.js for detailed descriptions.

const flatten = function(arr) {
  const flattenedArr = [];
  // Loop through the array passed into the function
  for (const element of arr) {
    // If an element is an array,
    if (Array.isArray(element)) {
      // Loop through that array,
      for (const subElement of element) {
        // And push its elements to flattenedArr
        flattenedArr.push(subElement);
      }
      // If element is NOT an array, simply push the current element to flattenedArr
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

const arr1 = [1, 2, [3, 4], 5, [6]];
console.log(flatten(arr1)); // -> [1, 2, 3, 4, 5, 6]

// Assertion Tests

assertArraysEqual(flatten(arr1), [1, 2, 3, 4, 5, 6]); // Assertion Passed