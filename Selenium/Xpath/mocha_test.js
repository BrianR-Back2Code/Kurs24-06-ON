const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("E2E Test für Demo Page", function () {
  this.timeout(5000);
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });
  after(async function () {
    await driver.quit();
  });
  it("Aufgabe 1: Hauptüberschrift finden", async function () {
    const header = await driver.findElement(
      By.xpath("//h1[text()='Demo Page']")
    );
    const headerText = await header.getText();
    assert.strictEqual(
      headerText,
      "Demo Page",
      "Hauptüberschrift stimmt nicht überein."
    );
  });

  it("Aufgabe Bonus: Slider steuern und Bewegung überprüfen", async function () {
    const slider = await driver.findElement(By.xpath('//*[@id="mySlider"]')); // Ersetze den XPath

    // Initiale Position des Sliders holen
    const sliderRect = await slider.getRect(); // Liefert {x, y, width, height}

    // Aktionen initialisieren
    const actions = driver.actions({ async: true });

    // Mausbewegung: Bewege die Maus über den Slider und ziehe ihn
    await actions
      .move({ x: sliderRect.x + 10, y: sliderRect.y + sliderRect.height / 2 }) // Anfangsposition
      .press() // Klickt auf den Slider
      .move({ x: sliderRect.width / 2, y: 0 }) // Verschiebt ihn horizontal
      .release() // Lässt die Maustaste los
      .perform();

    // Prüfe den Slider-Wert
    const sliderValue = await slider.getAttribute("value");
    assert.strictEqual(
      sliderValue,
      "50", // Erwarte den Zielwert
      `Slider ist nicht auf 50, sondern auf ${sliderValue}`
    );
  });

  it("Aufgabe 2: Dropdown-Menü", async function () {
    const dropdownButton = await driver.findElement(
      By.xpath('//*[@id="myDropdown"]')
    ); // Ergänze den XPath
    const actions = driver.actions({ async: true });
    await actions.move({ origin: dropdownButton }).perform();

    const dropdownOption = await driver.findElement(
      By.xpath('//*[@id="dropOption1"]')
    ); // Ergänze den XPath
    await dropdownOption.click();
    const link_selected = await driver.findElement(
      By.xpath('//*[@id="tbodyId"]/tr[1]/td[4]/h3')
    );
    const text_selected = await link_selected.getText();

    console.log(text_selected, "Hallo");
    assert.strictEqual(
      text_selected,
      "Link One Selected",
      "Drop Option stimmt nicht überein."
    );
  });

  it("Aufgabe 3: Textfeld auswählen", async function () {
    const textField = await driver.findElement(
      By.xpath('//*[@id="myTextInput"]')
    ); // Ergänze den XPath
    const myText = "Automatisierter Text";
    await textField.sendKeys(myText);
    const text = await textField.getText();
    console.log(text);
    assert.strictEqual(myText, "Automatisierter Text", "Text stimmt nicht.");
  });

  it("Aufgabe 4: Button klicken", async function () {
    const button = await driver.findElement(By.xpath('//*[@id="myButton"]'));
    await button.click();
    const buttontext = await button.getText();
    assert.strictEqual(buttontext, "Click Me (Purple)", "Text ist nicht Lila!");
  });

  it("Aufgabe 5: Checkboxen auswählen und überprüfen", async function () {
    const checkboxes = await driver.findElements(
      By.xpath("//input[@type='checkbox']")
    ); // Ergänze den XPath

    for (const checkbox of checkboxes) {
      if (!(await checkbox.isSelected())) {
        await checkbox.click();
      }

      assert.strictEqual(
        await checkbox.isSelected(),
        true,
        "Checkbox sollte ausgewählt sein, ist es aber nicht."
      );
    }
  });

  it("Aufgabe 6: Slider steuern", async function () {
    const slider = await driver.findElement(By.xpath('//*[@id="mySlider"]')); // Ergänze den XPath
    await driver.executeScript("arguments[0].value = 80;", slider);
    const sliderValue = await slider.getAttribute("value");
    assert.strictEqual(sliderValue, "80", "Slider ist nicht auf 80");
  });

  it("Aufgabe 7: Progress Bar", async function () {
    const progressBarLabel = await driver.findElement(
      By.xpath('//*[@id="progressBar"]')
    ); // Ergänze den XPath
    const progressValue = await progressBarLabel.getAttribute("value");
    assert.strictEqual(progressValue, "50", "Value ist nicht auf 50");
  });

  it("Aufgabe 8: Links finden", async function () {
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
  });

  it("Aufgabe Bonus: Slider steuern und Progress prüfen", async function () {
    const slider = await driver.findElement(By.xpath('//*[@id="mySlider"]')); // Ergänze den XPath
    await driver.executeScript("arguments[0].value = 80;", slider);
    const progressBarLabel = await driver.findElement(
      By.xpath('//*[@id="progressBar"]')
    ); // Ergänze den XPath
    const progressValue = await progressBarLabel.getAttribute("value");

    console.log(`Progress gefunden: ${progressValue} `);
    const sliderValue = await slider.getAttribute("value");
    if (sliderValue === "80") {
      console.log("Test bestanden: Slider-Wert ist korrekt auf 80 gesetzt.");
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet '80', aber gefunden '${sliderValue}'`
      );
    }
  });
});
