// Assert function that checks for strict equally between two parameters.

const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`🟢Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
};

// A function that checks the equality of two separate arrays. A for-loop 
// is used to loop through the first array, which compares whether the 
// index value of the first array is strictly equally to the same index 
// value of the second array. Returns 'true' if all values are equal. 

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Calling the eqArrays function as the first argument in the assertEqual
// function allows us to check the result of our comparison of arrays against
// an expected outcome. 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); 

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); 