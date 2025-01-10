const fs = require("fs");

/*Aufgabe 1: Filtern von Fehlern
Beschreibung: Schreibe eine Funktion, die aus einer Liste von Log-Nachrichten nur die Fehler (ERROR) herausfiltert.

Input: Eine Liste von Strings, z. B.: 

["INFO: User logged in", "ERROR: Database connection failed", "WARNING: Disk space low", "ERROR: Timeout while processing request"]

Output: Eine Liste mit den Fehlern:

["ERROR: Database connection failed", "ERROR: Timeout while processing request"]

Aufgabe 2: Zählen der Log-LevelBeschreibung: Schreibe eine Funktion, die zählt, wie oft jeder Log-Level (INFO, WARNING, ERROR) vorkommt.

Input: Eine Liste von Strings, z. B.:
["INFO: User logged in", "ERROR: Database connection failed", "WARNING: Disk space low", "ERROR: Timeout while processing request"]

Output: Ein Objekt (oder Dictionary), das die Häufigkeiten anzeigt:
{ "INFO": 1, "WARNING": 1, "ERROR": 2 }
*/
function readfile() {
  try {
    const data = fs.readFileSync("log.log", "utf8");
    const lines = data.split("\n");
    let errcount = 0;
    let infcount = 0;
    let warcount = 0;

    lines.forEach((line) => {
      if (line.includes("[error]")) {
        console.log(line);
        errcount++;
      } else if (line.includes("[info]")) {
        console.log(line);
        infcount++;
      } else if (line.includes("[warning]")) {
        console.log(line);
        warcount++;
      }
    });
    console.log(
      "Es wurden Error :",
      errcount,
      "Info : ",
      infcount,
      "und Warning :",
      warcount,
      "gefunden."
    );
  } catch (err) {
    console.error("Es gab einen Fehler beim Lesen der Datei!", err);
  }
}

readfile();
