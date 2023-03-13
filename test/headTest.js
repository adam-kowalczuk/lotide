const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 3 for [3, 2, 4]", () => {
    assert.strictEqual(head([3, 2, 4]), 3); 
  });
  it("returns 3 for [3, 2, 4]", () => {
    assert.strictEqual(head([3, 2, 4]), 3); 
  });
  it("does not return 4 for [3, 2, 4]", () => {
    assert.notStrictEqual(head([3, 2, 4]), 4); 
  });

});
