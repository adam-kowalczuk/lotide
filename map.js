//Loops through an array, applying a callback function to each item, and then returns an array with each altered item. 
const map = function(array, callback) {
  const results = [];
  //For-of-loop that loops through the array passed in as the first argument.
  for (let item of array) {
    //Each item is passed to the callback function, then pushed to the result array. 
    results.push(callback(item));
  }
  return results;
};

module.exports = map;