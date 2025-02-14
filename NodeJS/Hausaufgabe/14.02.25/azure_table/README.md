# Nutzung von Azure Table Storage

- Bitte führe die folgenden Schritte aus, um diese Aufgabe auszuprobieren:

- Falls das Repository geklont wurde, nutze bitte `npm install`.
- Da bereits eine Ressourcengruppe vorhanden ist, melde dich zuerst in der Azure CLI an:
  - Mit dem Befehl `az login`.
- Bearbeite und führe anschließend das Shell-Skript im Ordner **Bash** `create_storageacc.sh` aus.
- Danach dasselbe mit `create_table_storage.sh` durchführen. Erstelle eine Datei namens `storage.txt` und trage dort den Key ein, den du mit folgendem Befehl ausgibst:
  ```bash
  az storage account keys list --resource-group DeineRessourcenGruppe --account-name DeinStorageAccount --query "[0].value" --output tsv
  ```
- Ich habe eine `.gitignore` erstellt, um meinen Key zu schützen. Achte darauf, das Gleiche zu tun, um deine Daten zu sichern.
- Als nächstes geht es weiter mit `create_table.sh`.
- Optional kannst du anschließend `create.entity.sh` in der Azure CLI ausführen und danach `call_entity.sh` ausführen.
- Da es beim Aktualisieren der Entität zu Problemen kam, habe ich ein JavaScript erstellt, das:

  - Benutzer aus der Datei `user.json` erstellt,
  - Benutzer aus der Datei `user_update.json` aktualisiert,
  - Entitäten abruft, die im Table gespeichert sind,
  - und diese wieder löscht.

- Sollten Probleme auftreten, melde dich bitte einfach bei mir auf Slack.
