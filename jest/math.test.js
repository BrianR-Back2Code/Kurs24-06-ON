import Calculator from "./math.js";

const calc = new Calculator();

test("adds 1 + 1 to equal 2", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("adds -1 + -1 to equal -2", () => {
  expect(calc.add(-1, -1)).toBe(-2);
});

test("subtract 1 - 1 to equal 0", () => {
  expect(calc.subtract(1, 1)).toBe(0);
});

test("subtract -1 - -1 to equal 0", () => {
  expect(calc.subtract(-1, -1)).toBe(0);
});

test("dividing 1 / 1 to equal 1", () => {
  expect(calc.divide(1, 1)).toBe(1);
});

test("dividing -1 / -1 to equal 1", () => {
  expect(calc.divide(-1, -1)).toBe(1);
});
