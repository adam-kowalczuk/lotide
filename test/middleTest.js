const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([6, 8, 3, 7, 10, 5, 1])); // => [7]


const testArray1 = [1, 2, 9, 8, 4, 3];
console.log(assertArraysEqual(middle(testArray1), [9, 8])); // => "Assertion Passed: [9, 8] === [9, 8]"

const testArray2 = [6, 1, 4, 5, 8, 10, 3];
console.log(assertArraysEqual(middle(testArray2), [5])); // => "Assertion Passed: [5] === [5]"

const testArray3 = [3, 4, 6, 7, 9, 10];
console.log(assertArraysEqual(middle(testArray3), [6])); // => "Assertion Failed: [6, 7] !== [6]"