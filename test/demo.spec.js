var expect = require("chai").expect;

describe('Demo', () => {
  it("Always passes", function() {
    expect(true).to.equal(true);
  });

  it("Always fails", function() {
    expect(true).to.equal(false);
  });

  it("Will be removed", () => {

  });
});