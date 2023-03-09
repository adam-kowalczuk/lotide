const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keysArr1 = Object.keys(object1);
  const keysArr2 = Object.keys(object2);

  if (keysArr1.length !== keysArr2.length) return false;
 
  for (const key of keysArr1) {
    if (Array.isArray(object1[key], object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  const isEqual = eqObjects(obj1, obj2);
  return isEqual
    ? console.log(`🟢Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`)
    : console.log(`🔴Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectEqual(shirtObject, anotherShirtObject);
assertObjectEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);