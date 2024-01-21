const validateValue = require("./validateValue");

// if one test --> test
test("validate value", () => {
  expect(validateValue(50)).toBe(true);
});

// if several tests --> describe
describe("validate value", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("less than correct value", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("greater than correct value", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("smallest correct value", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("biggest correct correct value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
