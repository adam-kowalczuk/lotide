const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const keysArr1 = Object.keys(object1);
  const keysArr2 = Object.keys(object2);

  if (keysArr1.length !== keysArr2.length) return false;
 
  for (const key of keysArr1) {
    if (Array.isArray(object1[key], object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    };
  };
  return true;
}

module.exports = eqObjects;



