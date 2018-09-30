const chai = require("chai");
chai.should();
const fact = require("../lib/fact");

describe("get factorial of 3", () => {
  it("recursively", () => {
    fact["recursive"](3).should.equals(6);
  });

  it("tail call", () => {
    fact["tailcall"](3).should.equals(6);
  });

  it("trampolining", () => {
    fact["trampoline"](3).should.equals(6);
  });
});