const mapArrayToString = require("./mapArrayToString");

describe("filter array for numbers and then map to string", () => {
  test("correct value", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("mixed values", () => {
    expect(mapArrayToString([1, 2, 3, null, undefined, 'abcde'])).toEqual(["1", "2", "3"]);
  });

  test("empty array", () => {
    expect(mapArrayToString([])).toEqual([]);
  });

  test("not equal", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
