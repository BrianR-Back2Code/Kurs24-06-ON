// Importiere die notwendigen Module
import inquirer from "inquirer"; // Für die Benutzerauswahl in der Konsole
import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"; // Für die Kommunikation mit Azure Table Storage
import fs from "fs/promises"; // Für den asynchronen Zugriff auf das Dateisystem

// Definiere die Variablen für den Azure Storage Account und den Table Client
const accountName = "brtablestorage"; // Der Name des Azure Storage Accounts
const accountKey = (await fs.readFile("./storage.txt", "utf-8")).trim(); // Den Account-Schlüssel aus der Datei lesen und trimmen
const tableName = "NewTable"; // Der Name der Tabelle, auf die wir zugreifen möchten

// Authentifiziere den TableClient mit dem Azure Storage Account und -Key
const credential = new AzureNamedKeyCredential(accountName, accountKey);
const tableClient = new TableClient(
  `https://${accountName}.table.core.windows.net`, // Die URL für den Table Storage
  tableName, // Der Name der Tabelle, die verwendet wird
  credential // Die Authentifizierung mit den Anmeldeinformationen
);

// Funktion zum Erstellen von Benutzern in der Azure Table Storage
async function create_user() {
  try {
    // Lese die Benutzerdaten aus der JSON-Datei
    const data = await fs.readFile("./user.json", "utf8"); // Die Benutzerdaten asynchron einlesen
    const users = JSON.parse(data); // Die JSON-Daten parsen und in ein JavaScript-Objekt umwandeln

    // Iteriere über die Benutzer und füge sie der Tabelle hinzu
    for (const user of users) {
      await tableClient.createEntity(user); // Benutzer in der Tabelle erstellen
      console.log(`Benutzer ${user.Name} erfolgreich hinzugefügt.`); // Erfolgsnachricht
    }
  } catch (err) {
    console.error("Fehler beim Hinzufügen der Benutzer:", err); // Fehlerbehandlung
  }
}

// Funktion zum Aktualisieren von Benutzerdaten in der Azure Table Storage
async function update_user() {
  try {
    // Lese die Benutzerdaten aus der Update-Datei
    const data = await fs.readFile("./user_update.json", "utf8"); // Die Update-Daten einlesen
    const users = JSON.parse(data); // Die JSON-Daten parsen

    // Iteriere über die Benutzer und aktualisiere die Entitäten in der Tabelle
    for (const user of users) {
      // Definiere die Entität, die aktualisiert werden soll
      const entity = {
        partitionKey: user.PartitionKey, // PartitionKey für die Entität
        rowKey: user.RowKey, // RowKey für die Entität
        Name: user.Name, // Aktualisiere den Namen des Benutzers
        Alter: user.Alter, // Aktualisiere das Alter des Benutzers
      };

      // Update der Entität (nur geänderte Felder werden gemerged)
      await tableClient.upsertEntity(entity, "Merge");
      console.log(
        `Entität für Benutzer ${user.Name} erfolgreich aktualisiert.`
      );
    }
  } catch (err) {
    console.error("Fehler beim Aktualisieren der Entitäten:", err); // Fehlerbehandlung
  }
}

// Funktion zum Abrufen von Entitäten aus der Azure Table Storage
async function fetchEntities() {
  try {
    let count = 0; // Zähler für die abgerufenen Entitäten
    // `listEntities()` gibt eine asynchrone Iterable zurück, daher verwenden wir `for await...of`
    for await (let entity of tableClient.listEntities()) {
      console.log(entity); // Zeige die Entität in der Konsole an
      count++; // Erhöhe den Zähler
      if (count === 10) break; // Stoppe nach 10 abgerufenen Entitäten
    }
  } catch (err) {
    console.error("Fehler beim Abrufen der Entities:", err); // Fehlerbehandlung
  }
}

// Funktion zum Löschen aller Entitäten in der Tabelle
async function deleteAllEntities() {
  try {
    // Liste aller Entitäten in der Tabelle abrufen
    const entities = tableClient.listEntities();
    // Iteriere über jede Entität und lösche sie
    for await (const entity of entities) {
      await tableClient.deleteEntity(entity.partitionKey, entity.rowKey); // Lösche die Entität
      console.log(
        `Entität mit PartitionKey ${entity.partitionKey} und RowKey ${entity.rowKey} erfolgreich gelöscht.`
      ); // Erfolgsnachricht
    }
  } catch (err) {
    console.error("Fehler beim Abrufen der Entitäten:", err); // Fehlerbehandlung
  }
}

// Hauptfunktion, die das gesamte Skript steuert
async function main() {
  try {
    // Stelle dem Benutzer eine Auswahl von Optionen zur Verfügung
    const answers = await inquirer.prompt([
      {
        type: "list", // Liste von Optionen, aus denen der Benutzer auswählen kann
        name: "action", // Der Name des Eingabefeldes
        message: "Welche Aktion möchten Sie ausführen?", // Die Frage, die dem Benutzer gestellt wird
        choices: [
          "Benutzer erstellen", // Option zum Erstellen von Benutzern
          "Benutzer aktualisieren", // Option zum Aktualisieren von Benutzern
          "Entitäten abrufen", // Option zum Abrufen von Entitäten
          "Alle Entitäten löschen", // Option zum Löschen aller Entitäten
          "Beenden", // Option zum Beenden des Skripts
        ],
      },
    ]);

    // Je nach Auswahl des Benutzers wird die entsprechende Funktion aufgerufen
    switch (answers.action) {
      case "Benutzer erstellen":
        await create_user(); // Ruft die Funktion zum Erstellen von Benutzern auf
        break;
      case "Benutzer aktualisieren":
        await update_user(); // Ruft die Funktion zum Aktualisieren von Benutzern auf
        break;
      case "Entitäten abrufen":
        await fetchEntities(); // Ruft die Funktion zum Abrufen von Entitäten auf
        break;
      case "Alle Entitäten löschen":
        await deleteAllEntities(); // Ruft die Funktion zum Löschen von Entitäten auf
        break;
      case "Beenden":
        console.log("Beenden..."); // Zeigt eine Beendigungsnachricht an
        break;
      default:
        console.log("Ungültige Auswahl."); // Fehlermeldung, falls eine ungültige Auswahl getroffen wurde
        break;
    }
  } catch (error) {
    console.error("Fehler bei der Auswahl:", error); // Fehlerbehandlung
  }
}

// Ruft die Hauptfunktion auf, um das Skript zu starten
main();
