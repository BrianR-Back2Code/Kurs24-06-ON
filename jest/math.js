class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division durch 0 nicht möglich ");
    }
    return a / b;
  }

  even(number) {
    return number % 2 === 0;
  }

  filterpositivenumbers(numbers) {
    return numbers.filter((num) => num > 0);
  }

  async fetch() {
    return "Echte Daten";
  }
}

export default Calculator;
