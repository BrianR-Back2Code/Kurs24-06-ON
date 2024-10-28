// Schreib ein Node.js-Skript, das:
// Aufgabe 2
// Aufgabe: Inhalte in eine Datei schreiben oder hinzufügen

// Beschreibung

// 1. Den Benutzer nach einem Dateinamen fragt.
// 2. Den Benutzer nach einer Nachricht fragt, die in die Datei geschrieben oder an die
// Datei angehängt werden soll.
// 3. Die Nachricht in die Datei schreibt. Wenn die Datei bereits existiert, soll die
// Nachricht an die Datei angehängt werden.
const fs = require("fs");
const readline = require("readline");

// Erstelle ein Interface für die Benutzereingabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Frage nach dem Dateinamen
rl.question("Gib den Namen der Datei ein: ", (fileName) => {
  // Frage nach der Nachricht
  rl.question(
    "Gib die Nachricht ein, die in die Datei geschrieben oder angehängt werden soll: ",
    (message) => {
      // Versuche, die Datei im Anhängmodus zu öffnen (erstellt die Datei, falls sie nicht existiert)
      fs.appendFile(fileName, message + "\n", (err) => {
        if (err) {
          console.error("Fehler beim Schreiben in die Datei:", err);
        } else {
          console.log("Nachricht erfolgreich hinzugefügt.");
        }
        // Schließt die Eingabeschnittstelle
        rl.close();
      });
    }
  );
});
