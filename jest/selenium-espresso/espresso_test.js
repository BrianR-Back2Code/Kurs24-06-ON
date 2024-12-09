const { Builder, By, until } = require("selenium-webdriver");

async function buyEspresso() {
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
    await cartButton.click();

    const checkoutButton = await driver.wait(
      until.elementLocated(By.css('button[data-test="checkout"]')),
      5000
    );
    await checkoutButton.click();

    const confirmationMessage = await driver.wait(
      until.elementLocated(By.css("h1[data-v-29c3be1b]")),
      5000
    );
    const confirmationText = await confirmationMessage.getText();
    console.log(`Bestätigung erhalten: ${confirmationText}`);
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  } finally {
    await driver.quit();
  }
}

// Ruft die Funktion auf
buyEspresso();
