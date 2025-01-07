const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const { elementTextContains } = require("selenium-webdriver/lib/until");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Login Test", function () {
  this.timeout(5000);
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://seleniumbase.io/realworld/login");
  });
  after(async function () {
    await driver.quit();
  });
  it("1. Testfall: Erfolgreicher Login", async function () {
    await driver.executeScript(
      "window.open('https://seleniumbase.io/realworld/signup');"
    );
    const handles = await driver.getAllWindowHandles();
    console.log("Alle Handles:", handles);
    await sleep(2000);
    await driver.switchTo().window(handles[1]);

    const getUsername = await driver
      .findElement(By.xpath("/html/body/div[1]/h5"))
      .getText();
    const getPassword = await driver
      .findElement(By.xpath("/html/body/div[2]/h5"))
      .getText();
    let getTTL = await driver.findElement(By.id("ttl")).getText;
    if (getTTL <= "5") {
      getTTL = await driver.wait(until.elementTextContains(By.id("ttl")), "29");
    }
    const getTOTP = await driver.findElement(By.id("totp")).getText();
    console.log(getTTL);
    const secretKey = await driver.findElement(By.id("secret")).getText();
    console.log(secretKey);
    await driver.switchTo().window(handles[0]);

    await driver
      .findElement(By.xpath('//*[@id="username"]'))
      .sendKeys(getUsername);
    await driver
      .findElement(By.xpath('//*[@id="password"]'))
      .sendKeys(getPassword);
    await driver.findElement(By.id("totpcode")).sendKeys(getTOTP);

    const signin = await driver.findElement(By.xpath('//*[@id="log-in"]'));
    await signin.click();
    await sleep(1000);
    const welcome = await driver.findElement(By.xpath("/html/body/h1"));
    const checkText = await welcome.getText();
    assert.strictEqual(secretKey, "GAXG2MTEOR3DMMDG", "Falscher Secretkey");
    assert.strictEqual(
      checkText,
      "Welcome!",
      "Hauptüberschrift stimmt nicht überein."
    );
  });
});
