const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] if input array length is <= 2", () => {
    assert.deepEqual(middle([2, 4]), []); 
  });
  it("returns two middle values if input array length is even", () => {
    assert.deepEqual(middle([1, 2, 9, 8, 4, 3]), [9, 8]);
  });
  it("returns middle value if input array length is odd", () => {
    assert.deepEqual(middle([6, 1, 4, 5, 8, 10, 3]), [5]); 
  });
  it("does not return a single middle value if input array length is even", () => {
    assert.notDeepEqual(middle([1, 2, 9, 8, 4, 3]), [9]);
  });
  it("does not return 2 middle values if input array length is odd", () => {
    assert.notDeepEqual(middle([6, 1, 4, 5, 8, 10, 3]), [4, 5]); 
  });
});
