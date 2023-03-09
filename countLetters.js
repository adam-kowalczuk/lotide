const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`🟢Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const finalCount = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      finalCount[letter]
        ? finalCount[letter] += 1
        : finalCount[letter] = 1;
    }
  }
  return finalCount;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters('LHL').L, 2);
assertEqual(countLetters("lighthouse in the house").i, 2);
