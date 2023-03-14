//Loops through an array, pushing all values to a new array, until a particular is value is found. 
const takeUntil = function(array, callback) {
  let results = [];
  //Looping through the array passed in as the first argument
  for (const item of array) {
    //If the value passed into the callback matches the one set by the callback, break the loop.
    if (callback(item)) {
      break;
    }
    //Until then, push each item in the array into results.
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;




