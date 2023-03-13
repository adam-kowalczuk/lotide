const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [] if input array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] if input array only has one element", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});


console.log(tail(["Hello", "Lighthouse", "Labs"]));

