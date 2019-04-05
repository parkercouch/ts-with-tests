import { multiply } from "../../src/nested/nested_example";

import { expect } from "chai";
import "mocha";

describe("Nested Example Tests", () => {
  it("should be able to multiply", () => {
    expect(multiply(3, 4)).to.equal(12);
  });
});
