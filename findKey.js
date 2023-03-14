const findKey = function (obj, callback) {
  //Loops through object passed into the first arugment
  for (const key in obj) {
    //If the value of the key passed into the callback function returns true
    if (callback(obj[key])) {
      //Return the first key that matches 
      return key;
    }
  }
  //If the callback function does not find that any of the values passed into it are true, return undefined
  return undefined;
}

module.exports = findKey;