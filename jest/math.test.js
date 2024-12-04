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

test("dividing 10 / 2 to equal 5", () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test("dividing -1 / -1 to equal 1", () => {
  expect(calc.divide(-1, -1)).toBe(1);
});

test("is my number even or odd", () => {
  expect(calc.even(2)).toBe(true);
});

test("Filter Positive Numbers", () => {
  expect(calc.filterpositivenumbers([1, -1, 2, -2, 3])).toEqual([1, 2, 3]);
});

test("Empty Array", () => {
  expect(calc.filterpositivenumbers([])).toEqual([]);
});

test("Fetch", async () => {
  const mockFetch = jest.fn(() => calc.fetch("EchteDaten"));
  const data = await mockFetch();
  expect(data).toBe("Echte Daten");
});

test("Fetch", async () => {
  const unmockFetch = jest.unmock(() => calc.fetch("EchteDaten"));
  const data = await unmockFetch();
  expect(data).toBe("Echte Daten");
});
