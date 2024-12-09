const { Builder, By, until } = require("selenium-webdriver");

async function aufgabe1() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/coffee/");

    const espressoButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Espresso"]')),
      5000
    );
    await espressoButton.click();

    const cartButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    const cartButtonText = await cartButton.getText();
    if (cartButtonText.trim() === "cart (1)") {
      console.log("Test bestanden: Im Warenkorb wird die 1 angezeigt.");
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet 'Cart (1)', aber gefunden '${cartButtonText}'`
      );
    }
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  } finally {
    console.log();
    await driver.quit();
  }
}

async function aufgabe2() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/coffee/");

    const espressoButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Espresso"]')),
      5000
    );
    await espressoButton.click();

    const CapuButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Cappuccino"]')),
      5000
    );
    await CapuButton.click();

    const cartButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    const cartButtonText = await cartButton.getText();
    if (cartButtonText.trim() === "cart (2)") {
      console.log("Test bestanden: Im Warenkorb wird die 2 angezeigt.");
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet 'Cart (1)', aber gefunden '${cartButtonText}'`
      );
    }
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  } finally {
    console.log();
    await driver.quit();
  }
}

async function aufgabe3() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/coffee/");

    const MochaButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Mocha"]')),
      5000
    );
    await MochaButton.click();

    const cartButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    await cartButton.click();

    const checkoutButton = await driver.wait(
      until.elementLocated(By.css('button[data-test="checkout"]')),
      5000
    );

    const checkoutText = await checkoutButton.getText();
    const expectedPrice = "Total: $8.00";

    if (checkoutText.trim() === expectedPrice) {
      console.log(
        `Test bestanden: Der Preis für Mocha wird korrekt angezeigt '${checkoutText}'.`
      );
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet '${expectedPrice}', aber gefunden '${checkoutText}'`
      );
    }
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  } finally {
    console.log();
    await driver.quit();
  }
}

async function Bonus() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/coffee/");

    const espressoButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Espresso"]')),
      5000
    );
    await espressoButton.click();

    const CapuButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Cappuccino"]')),
      5000
    );
    await CapuButton.click();

    const MochaButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Mocha"]')),
      5000
    );
    await MochaButton.click();
    const cartButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    await cartButton.click();

    const checkoutButton = await driver.wait(
      until.elementLocated(By.css('button[data-test="checkout"]')),
      5000
    );

    const checkoutText = await checkoutButton.getText();
    const expectedPrice = "Total: $37.00";

    if (checkoutText.trim() === expectedPrice) {
      console.log(
        `Test bestanden: Der Preis für Mocha wird korrekt angezeigt '${checkoutText}'.`
      );
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet '${expectedPrice}', aber gefunden '${checkoutText}'`
      );
    }
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  } finally {
    console.log();
    await driver.quit();
  }
}

// Ruft die Funktion auf
aufgabe1();
aufgabe2();
aufgabe3();
Bonus();
