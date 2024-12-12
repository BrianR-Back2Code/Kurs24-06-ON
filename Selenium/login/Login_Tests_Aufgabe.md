
# Aufgabe: Login-Tests mit Selenium, Mocha und Node.js

## Ziel der Aufgabe
Erstelle automatisierte Tests für die Login-Seite unter [https://seleniumbase.io/simple/login](https://seleniumbase.io/simple/login). Ziel ist es, verschiedene Szenarien des Login-Prozesses zu testen:

1. **Erfolgreicher Login**: Überprüfung der korrekten Weiterleitung.
2. **Ungültige Anmeldedaten**: Testen von Benutzername/Passwort-Kombinationen, die nicht existieren.
3. **Leere Felder**: Validierung, ob Fehlermeldungen für nicht ausgefüllte Felder angezeigt werden.

Für die Testdaten kannst du den Benutzernamen und das Passwort von [https://seleniumbase.io/simple/signup](https://seleniumbase.io/simple/signup) verwenden.

---

## Beschreibung der Testfälle

### 1. Testfall: Erfolgreicher Login
- **Vorgehen:**
  1. Rufe die Login-Seite auf.
  2. Gib den korrekten Benutzernamen und das richtige Passwort ein.
  3. Klicke auf den Anmelden-Button.
  4. Überprüfe ob eine Weiterleitung erfolgt.

- **Erwartetes Ergebnis:**
  - Die Seite leitet korrekt weiter.

### 2. Testfall: Ungültige Anmeldedaten
- **Vorgehen:**
  1. Rufe die Login-Seite auf.
  2. Gib einen falschen Benutzernamen und/oder ein falsches Passwort ein.
  3. Klicke auf den Anmelden-Button.
  4. Überprüfe, ob eine Fehlermeldung angezeigt wird.

- **Erwartetes Ergebnis:**
  - Eine Fehlermeldung wie "Invalid username or password" wird angezeigt.

### 3. Testfall: Leere Felder
- **Vorgehen:**
  1. Rufe die Login-Seite auf.
  2. Lasse die Felder für Benutzername und Passwort leer.
  3. Klicke auf den Anmelden-Button.
  4. Überprüfe, ob eine Validierungsfehlermeldung angezeigt wird.

- **Erwartetes Ergebnis:**
  - Eine Meldung wie "The Username is Required!" oder "The Password is Required!" erscheint.

---

## Schritte zur Bearbeitung der Aufgabe

### Vorbereitung
1. Stelle sicher, dass Node.js und die benötigten Pakete von gestern (z. B. `selenium-webdriver`, `mocha`) installiert sind.
2. Erstelle ein neues Projektverzeichnis und initialisiere es mit `npm init`.
3. Installiere die benötigten Abhängigkeiten:
   ```bash
   npm install selenium-webdriver mocha
   ```

### Umsetzung der Testfälle
1. **Setup der Testumgebung:**
   - Initialisiere Selenium-WebDriver für Chrome.
   - Schreibe eine Mocha-Teststruktur mit `before`, `after` und mindestens drei `it`-Blöcken (je einen für jeden Testfall).

2. **Erstelle die Testfälle:**
   - Schreibe in jedem `it`-Block die Schritte des jeweiligen Testfalls.
   - Verwende Selenium-Befehle wie `findElement`, `sendKeys`, `click` und `getText`, um die Schritte zu implementieren.
   - Nutze das `assert`-Modul von Node.js für Assertions (z. B. `assert.strictEqual(actual, expected)`).

3. **Führe die Tests aus:**
   - Starte die Tests mit dem Befehl:
     ```bash
     mocha test.js
     ```
   - Überprüfe ob alle tests erfolgreich durchlaufen oder Fehler korrekt erkannt werden.


---

## Abgabe

- Stelle sicher, dass dein Code gut strukturiert und kommentiert ist. Die Aufgabe soll im Classroom hochgeladen werden als Code mit Kommentaren (bitte eigene Kommentare). Als Technologien sollen ausschließlich Mocha, Selenium und das `assert`-Modul benutzt werden.
- Optional: Dokumentiere Herausforderungen oder interessante Erkenntnisse während der Bearbeitung.

Viel Erfolg!
