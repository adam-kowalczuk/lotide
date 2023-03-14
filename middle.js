//Returns the middle value(s) of an array.

const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    return [arr[middleIndex]];
  }
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

module.exports = middle;