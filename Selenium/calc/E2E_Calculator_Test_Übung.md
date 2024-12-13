# Übung: E2E-Test für eine Taschenrechner-App

## Ziel:
Erstelle automatisierte End-to-End-Tests für die Taschenrechner-App unter `https://seleniumbase.io/apps/calculator` mit **Mocha**, **Selenium** und dem Assertion-Modul aus Node.js. Denkt bitte daran, dass wir hier eine Übung machen, also versucht die aufgabe für euch selbständig zu lösen und euch nur für einzelne Fragestellungen Hilfe von eurer lieblings KI zu holen! :D

---

## Schritt 1: Vorbereitung

### Benötigte Methoden:
- **`driver.get(url)`**: Öffnet die Taschenrechner-App.
- **`driver.findElement(By.selector)`**: Sucht Buttons und das Display.
- **`.click()`**: Simuliert Klicks auf Buttons.
- **`.getText()`**: Liest den Text aus dem Display.
- **`.quit()`**: Beendet den Browser nach dem Test.

### Teststruktur in Mocha:
```javascript
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Calculator App Tests', function () {
    let driver;

    before(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('Testbeschreibung', async function () {
        // Testlogik hier
    });
});
```

---

## Schritt 2: Testfälle

### Testfall 1: Addition testen
- **Beschreibung**: Testet, ob 5 + 3 korrekt berechnet wird.
- **Schritte**:
  1. Öffne die App mit `driver.get(url)`.
  2. Klicke auf die Buttons **5**, **+**, **3**, **=**.
  3. Überprüfe, ob das Display `8` zeigt.

**Beispielcode**:
```javascript
it('should correctly calculate 5 + 3', async function () {
    await driver.get('https://seleniumbase.io/apps/calculator');
    await driver.findElement(By.id('5')).click();
    await driver.findElement(By.id('add')).click();
    await driver.findElement(By.id('3')).click();
    await driver.findElement(By.id('equal')).click();

    const result = await driver.findElement(By.id('output')).getAttribute('value');
    assert.strictEqual(result, '8');
});
```

### Testfall 2: Multiplikation testen
- **Beschreibung**: Testet, ob 7 × 4 korrekt berechnet wird.
- **Schritte**:
  1. Öffne die App.
  2. Klicke auf **7**, **×**, **4**, **=**.
  3. Überprüfe, ob das Ergebnis `28` ist.

### Testfall 3: Division durch Null
- **Beschreibung**: Überprüft, ob bei Division durch Null ein Fehler angezeigt wird.
- **Schritte**:
  1. Öffne die App.
  2. Klicke auf **8**, **÷**, **0**, **=**.
  3. Überprüfe, ob im Display `Error` steht.

---

## Schritt 3: Bonusaufgabe
- Schreibe einen Test, der überprüft, ob eine komplexe Berechnung (z. B. `(2 + 3) × 4`) korrekt funktioniert.
- Nutze die Buttons **(** und **)**.

---

## Schritt 4: Abschluss
- Führe die Tests aus:
  ```bash
  mocha test.js
  ```
- Stelle sicher, dass alle Tests erfolgreich sind.

- Meldet euch bitte bei mir sobald ihr fertig seid! :)
