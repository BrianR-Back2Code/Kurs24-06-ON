const { Builder, By } = require("selenium-webdriver");

(async function findHeader() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 1: Hauptüberschrift finden");
    const header = await driver.findElement(
      By.xpath('//*[@id="tbodyId"]/tr[1]/td[1]/h1')
    );
    console.log("Gefundene Überschrift:", await header.getText());
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 2

(async function selectDropdownOption() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 2: Dropdown-Menü");
    const dropdownButton = await driver.findElement(
      By.xpath('//*[@id="myDropdown"]')
    ); // Ergänze den XPath
    const actions = driver.actions({ async: true });
    await actions.move({ origin: dropdownButton }).perform();

    const dropdownOption = await driver.findElement(
      By.xpath('//*[@id="dropOption1"]')
    ); // Ergänze den XPath
    await dropdownOption.click();
    console.log("Dropdown-Option 'Link One' ausgewählt.");
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 3

(async function selectTextField() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 3: Textfeld auswählen");
    const textField = await driver.findElement(
      By.xpath('//*[@id="myTextInput"]')
    ); // Ergänze den XPath
    const myText = "Automatisierter Text";
    await textField.sendKeys(myText);
    console.log(`${myText}`);
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 4 wurde vergessen aber nachgetragen gerne bei der Kontrolle ignorieren

(async function clickButton() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 4: Button klicken");
    const button = await driver.findElement(By.xpath('//*[@id="myButton"]')
  ); // Ergänze den XPath
    await button.click();
    console.log("Button geklickt.");
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 5

(async function selectCheckboxes() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 5: Checkboxen auswählen");
    const checkboxes = await driver.findElements(
      By.xpath("/html/body/form/table/tbody/tr[9]/td[1]/input")
    ); // Ergänze den XPath
    for (const checkbox of checkboxes) {
      if (!(await checkbox.isSelected())) {
        await checkbox.click();
      }
    }
    console.log("Alle Checkboxen ausgewählt.");
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 6

(async function controlSlider() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 6: Slider steuern");
    const slider = await driver.findElement(
      By.xpath("/html/body/form/table/tbody/tr[6]/td[2]/input")
    ); // Ergänze den XPath
    await driver.executeScript("arguments[0].value = 75;", slider);
    console.log("Slider auf Wert 75 gesetzt.");
  } finally {
    await driver.quit();
  }
})();

// Aufgabe 7

(async function findProgressBarLabel() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 7: Progress Bar");
    const progressBarLabel = await driver.findElement(
      By.xpath("/html/body/form/table/tbody/tr[6]/td[4]/progress")
    ); // Ergänze den XPath
    console.log("Label gefunden:", await progressBarLabel.getText());
  } finally {
    await driver.quit();
  }
})();

//Aufgabe 8

(async function findLink() {
  let driver = await new Builder().forBrowser("firefox").build();

  try {
    await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 8: Links finden");

    // Schleife von 1 bis 4 (da XPath-Indizes bei 1 beginnen)
    for (let index = 1; index <= 4; index++) {
      try {
        const link = await driver.findElement(
          By.xpath(`/html/body/form/table/tbody/tr[11]/td[${index}]/a`)
        ); // XPath mit korrektem Index
        const href = await link.getAttribute("href");
        console.log(`Gefundener Link ${index}:`, href);
      } catch (error) {
        console.error(`Kein Link gefunden in Zelle ${index}:`, error.message);
      }
    }
  } finally {
    await driver.quit();
  }
})();
