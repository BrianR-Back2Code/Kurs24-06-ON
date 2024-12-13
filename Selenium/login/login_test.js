const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Login Test", function () {
  this.timeout(5000);
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://seleniumbase.io/simple/login");
  });
  after(async function () {
    await driver.quit();
  });
  it("1. Testfall: Erfolgreicher Login", async function () {
    await driver.get("https://seleniumbase.io/simple/signup");

    const getUsername = await driver
      .findElement(By.xpath("/html/body/div[1]/h5"))
      .getText();
    console.log(getUsername);
    const getPassword = await driver
      .findElement(By.xpath("/html/body/div[2]/h5"))
      .getText();
    console.log(getPassword);
    await driver.navigate().back();

    await driver
      .findElement(By.xpath('//*[@id="username"]'))
      .sendKeys(getUsername);
    await driver
      .findElement(By.xpath('//*[@id="password"]'))
      .sendKeys(getPassword);

    const signin = await driver.findElement(By.xpath('//*[@id="log-in"]'));
    await signin.click();

    const welcome = await driver.findElement(By.xpath("/html/body/h1"));
    const checkText = await welcome.getText();
    assert.strictEqual(
      checkText,
      "Welcome!",
      "Hauptüberschrift stimmt nicht überein."
    );
  });

  it("2. Testfall: Ungültige Anmeldedaten", async function () {
    const signout = await driver.findElement(By.xpath("/html/body/div/a[8]"));
    await signout.click();
    const myUsername = "demo_use";
    const myPassword = "secret_pas";
    await driver
      .findElement(By.xpath('//*[@id="username"]'))
      .sendKeys(myUsername);
    await driver
      .findElement(By.xpath('//*[@id="password"]'))
      .sendKeys(myPassword);

    const signin = await driver.findElement(By.xpath('//*[@id="log-in"]'));
    await signin.click();
    const notCorrect = await driver.findElement(
      By.xpath("/html/body/div[1]/div/form/div[1]/h6")
    );
    const checkText = await notCorrect.getText();
    assert.strictEqual(
      checkText,
      "Invalid Username!",
      "Hauptüberschrift stimmt nicht überein."
    );
  });
  it("3.1. Testfall: Leere Felder", async function () {
    await driver.findElement(By.xpath('//*[@id="username"]')).clear();
    await driver.findElement(By.xpath('//*[@id="password"]')).clear();
    const myUsername = "demo_user";
    const myPassword = "";
    await driver
      .findElement(By.xpath('//*[@id="username"]'))
      .sendKeys(myUsername);
    await driver
      .findElement(By.xpath('//*[@id="password"]'))
      .sendKeys(myPassword);

    const signin = await driver.findElement(By.xpath('//*[@id="log-in"]'));
    await signin.click();
    const notCorrect = await driver.findElement(
      By.xpath("/html/body/div[1]/div/form/div[1]/h6")
    );
    const checkText = await notCorrect.getText();
    assert.strictEqual(
      checkText,
      "The Password is Required!",
      "Hauptüberschrift stimmt nicht überein."
    );
  });

  it("3.2. Testfall: Leere Felder", async function () {
    await driver.findElement(By.xpath('//*[@id="username"]')).clear();
    await driver.findElement(By.xpath('//*[@id="password"]')).clear();
    const myUsername = "";
    const myPassword = "secret_pass";

    await driver
      .findElement(By.xpath('//*[@id="username"]'))
      .sendKeys(myUsername);
    await driver
      .findElement(By.xpath('//*[@id="password"]'))
      .sendKeys(myPassword);

    const signin = await driver.findElement(By.xpath('//*[@id="log-in"]'));
    await signin.click();
    const notCorrect = await driver.findElement(
      By.xpath("/html/body/div[1]/div/form/div[1]/h6")
    );
    const checkText = await notCorrect.getText();
    assert.strictEqual(
      checkText,
      "The Username is Required!",
      "Hauptüberschrift stimmt nicht überein."
    );
  });
});
