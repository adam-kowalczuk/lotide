const flatten = function(arr) {
  const flattenedArr = [];
  // Loop through the array passed into the function
  for (const element of arr) {
    // If an element is an array,
    if (Array.isArray(element)) {
      // Loop through the element array,
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

module.exports = flatten;
