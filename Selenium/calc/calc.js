const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Calc_test", function () {
  this.timeout(5000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://seleniumbase.io/apps/calculator");
  });

  after(async function () {
    await driver.quit();
  });

  it("Wieviel ist 5 + 3? ", async function () {
    // Klicke auf die Zahl
    await driver.findElement(By.id("5")).click();
    // Klicke auf den Operator '+'
    await driver.findElement(By.id("add")).click();
    // Klicke erneut auf die Zahl
    await driver.findElement(By.id("3")).click();
    // Klicke auf "="
    await driver.findElement(By.id("equal")).click();
    // Hole das Ergebnis aus dem Output-Feld
    const sum = await driver.findElement(By.id("output")).getAttribute("value");

    const controlled_sum = "8";

    // Überprüfen, ob das Ergebnis korrekt ist
    assert.strictEqual(sum, controlled_sum, "Falsches Ergebnis");
  });

  it("Wieviel ist 7 x 4? ", async function () {
    // Klicke auf Clear
    await driver.findElement(By.id("←")).click();
    // Klicke auf die Zahl
    await driver.findElement(By.id("7")).click();
    // Klicke auf den Operator 'x'
    await driver.findElement(By.id("multiply")).click();
    // Klicke erneut auf die Zahl
    await driver.findElement(By.id("4")).click();
    // Klicke auf "="
    await driver.findElement(By.id("equal")).click();
    // Hole das Ergebnis aus dem Output-Feld
    const sum = await driver.findElement(By.id("output")).getAttribute("value");
    const controlled_sum = "28";

    // Überprüfen, ob das Ergebnis korrekt ist
    assert.strictEqual(sum, controlled_sum, "Falsches Ergebnis");
  });
  it("Wieviel ist 8 / 0? ", async function () {
    // Klicke auf Clear
    await driver.findElement(By.id("←")).click();
    // Klicke auf die Zahl
    await driver.findElement(By.id("8")).click();
    // Klicke auf den Operator '/'
    await driver.findElement(By.id("divide")).click();
    // Klicke erneut auf die Zahl
    await driver.findElement(By.id("0")).click();
    // Klicke auf "="
    await driver.findElement(By.id("equal")).click();
    // Hole das Ergebnis aus dem Output-Feld
    const sum = await driver.findElement(By.id("output")).getAttribute("value");
    const controlled_sum = "Error";

    // Überprüfen, ob das Ergebnis korrekt ist
    assert.strictEqual(sum, controlled_sum, "Falsches Ergebnis");
  });

  it("Wieviel ist ( 2 + 3 ) x4 ? ", async function () {
    // Klicke auf Clear
    await driver.findElement(By.id("←")).click();
    // Klicke auf die Zahl (
    await driver.findElement(By.id("(")).click();
    // Klicke auf die Zahl
    await driver.findElement(By.id("2")).click();
    // Klicke auf den Operator '+'
    await driver.findElement(By.id("add")).click();
    // Klicke erneut auf die Zahl 1
    await driver.findElement(By.id("3")).click();
    // Klicke auf die Zahl (
    await driver.findElement(By.id(")")).click();
    // Klicke auf die Zahl x
    await driver.findElement(By.id("multiply")).click();
    // Klicke auf die Zahl
    await driver.findElement(By.id("4")).click();
    // Klicke auf "="
    await driver.findElement(By.id("equal")).click();
    // Hole das Ergebnis aus dem Output-Feld
    const sum = await driver.findElement(By.id("output")).getAttribute("value");
    const controlled_sum = "20";

    // Überprüfen, ob das Ergebnis korrekt ist
    assert.strictEqual(sum, controlled_sum, "Falsches Ergebnis");
  });
});
