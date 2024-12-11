# Hausaufgabe: Finde die richtigen Selektoren!

---

## Einleitung
 
Heute habt ihr gelernt, wie XPath aufgebaut ist und welche Syntax verwendet wird, um HTML-Elemente präzise zu selektieren. Dabei habt ihr grundlegende Konzepte wie die Verwendung von Attributen, Hierarchien und Textinhalten für die Erstellung von XPath-Ausdrücken kennengelernt. Dieses Wissen wendet ihr nun an, um XPath gezielt in Kombination mit Selenium einzusetzen und automatisierte Tests zu erstellen.

Eure Aufgabe ist es, die vorgegebenen Tests zu ergänzen, indem ihr die passenden XPath-Ausdrücke einfügt. Diese Tests zielen darauf ab, verschiedene Elemente auf einer Demo-Webseite zu identifizieren und mit ihnen zu interagieren.

- In dieser Einheit arbeiten wir mit der Demo Page von SeleniumBase:  
  [https://seleniumbase.io/demo_page](https://seleniumbase.io/demo_page)

### **Wichtig**:
- **Pflichtaufgaben (Aufgabe 1-5):** Diese müsst ihr bearbeiten. Die Gesamtpunktzahl beträgt **100 Punkte**, die sich wie folgt aufteilen:
  - **Aufgabe 1:** 20 Punkte
  - **Aufgabe 2:** 20 Punkte
  - **Aufgabe 3:** 20 Punkte
  - **Aufgabe 4:** 20 Punkte
  - **Aufgabe 5:** 20 Punkte
- **Zusatzaufgaben (Aufgabe 6-8):** Diese Aufgaben sind optional und dienen der Vertiefung.
- **Abgabe:**  
  - Ihr könnt eure Lösung als `.js`-Datei oder `.txt`-Datei im Classroom hochladen.  
  - Wenn ihr alle Aufgaben in einer Datei löst, verwendet bitte Kommentare (`// Aufgabe X`), um klar zu machen, welche Aufgabe ihr gerade löst.



## Hinweise zur Abgabe:
1. **Eine Datei oder mehrere:**  
   - Wenn ihr alle Lösungen in einer Datei abgeben möchtet, fügt bitte Kommentare hinzu, z. B.:
     ```javascript
     // Aufgabe 1: Hauptüberschrift
     ```
   - Alternativ könnt ihr für jede Aufgabe eine separate Datei erstellen, z. B. `aufgabe1.js`.

2. **Prüft eure Lösungen (Tipp):**  
   - Testet die XPath-Ausdrücke in der Developer-Konsole des Browsers mit:
     ```javascript
     $x("<XPath-Ausdruck>")
     ```
   - Pro-Tipp: Im Browser-Inspektionstool könnt ihr auch den XPath eines Elements direkt kopieren. Experimentiert mit diesem hilfreichen Feature!

3. **Abgabe:**  
   - Ladet die Datei(en) im Classroom hoch.

Viel Erfolg! 🚀

---


## **Pflichtaufgaben (1-5)**

### **Aufgabe 1: Hauptüberschrift finden (20 Punkte)**
**Beschreibung:**
- Die Funktion soll die Hauptüberschrift (`<h1>`) der Seite mit dem Text **Demo Page** finden.
- Ergänze den XPath, um diese Überschrift anzusteuern.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function findHeader() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 1: Hauptüberschrift finden");
        const header = await driver.findElement(By.xpath("")); // Ergänze den XPath
        console.log("Gefundene Überschrift:", await header.getText());
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 2: Dropdown-Option auswählen (20 Punkte)**
**Beschreibung:**
- Die Funktion soll die Maus über das Dropdown-Element bewegen und die Option **Link One** auswählen.
- Ergänze den XPath, um den Dropdown-Button und die Option anzusteuern.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function selectDropdownOption() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 2: Dropdown-Menü");
        const dropdownButton = await driver.findElement(By.xpath("")); // Ergänze den XPath
        const actions = driver.actions({ async: true });
        await actions.move({ origin: dropdownButton }).perform();

        const dropdownOption = await driver.findElement(By.xpath("")); // Ergänze den XPath
        await dropdownOption.click();
        console.log("Dropdown-Option 'Link One' ausgewählt.");
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 3: Textfeld ausfüllen (20 Punkte)**
**Beschreibung:**
- Die Funktion soll ein Textfeld finden und den Text **Automatisierter Test** eingeben.
- Ergänze den XPath, um das Textfeld mit der ID `myTextInput` zu finden.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function selectTextField() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 3: Textfeld auswählen");
        const textField = await driver.findElement(By.xpath("")); // Ergänze den XPath
        await textField.sendKeys("Automatisierter Test");
        console.log("Textfeld mit Text gefüllt.");
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 4: Button klicken (20 Punkte)**
**Beschreibung:**
- Die Funktion soll einen grünen Button mit dem Text **Click Me (Green)** finden und klicken.
- Ergänze den XPath, um den Button anzusteuern.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function clickButton() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 4: Button klicken");
        const button = await driver.findElement(By.xpath("")); // Ergänze den XPath
        await button.click();
        console.log("Button geklickt.");
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 5: Checkboxen auswählen (20 Punkte)**
**Beschreibung:**
- Die Funktion soll alle Checkboxen auf der Seite auswählen.
- Ergänze den XPath, um alle Checkbox-Elemente auf der Seite zu finden.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function selectCheckboxes() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 5: Checkboxen auswählen");
        const checkboxes = await driver.findElements(By.xpath("")); // Ergänze den XPath
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
```

---

## **Zusatzaufgaben (6-8)**

### **Aufgabe 6: Slider steuern**
**Beschreibung:**
- Die Funktion soll den Slider auf den Wert 75 setzen.
- Ergänze den XPath, um den Slider zu finden.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function controlSlider() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 6: Slider steuern");
        const slider = await driver.findElement(By.xpath("")); // Ergänze den XPath
        await driver.executeScript("arguments[0].value = 75;", slider);
        console.log("Slider auf Wert 75 gesetzt.");
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 7: Progress Bar Label finden**
**Beschreibung:**
- Die Funktion soll das Label für die Progress Bar finden und den angezeigten Text ausgeben.
- Ergänze den XPath, um das Label mit der ID `progressLabel` zu finden.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function findProgressBarLabel() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 7: Progress Bar");
        const progressBarLabel = await driver.findElement(By.xpath("")); // Ergänze den XPath
        console.log("Label gefunden:", await progressBarLabel.getText());
    } finally {
        await driver.quit();
    }
})();
```

---

### **Aufgabe 8: Link finden**
**Beschreibung:**
- Die Funktion soll einen Link mit dem Text **SeleniumBase on GitHub** finden und die URL ausgeben.
- Ergänze den XPath, um den Link anzusteuern.

```javascript
const { Builder, By } = require("selenium-webdriver");

(async function findLink() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 8: Links finden");
        const link = await driver.findElement(By.xpath("")); // Ergänze den XPath
        console.log("Gefundener Link:", await link.getAttribute("href"));
    } finally {
        await driver.quit();
    }
})();
```

