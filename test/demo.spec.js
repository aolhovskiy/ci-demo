var expect = require("chai").expect;

describe('Demo', () => {
  it("Always passes", function() {
    expect(true).to.equal(true);
  });

  it("Always failed but fixed now", function() {
    expect(true).to.equal(true);
  });

  it("Will be removed", () => {

  });
});