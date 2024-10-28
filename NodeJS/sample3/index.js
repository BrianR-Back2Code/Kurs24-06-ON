const fs = require("fs");
const content = "Dies ist ein Beispieltext.";

function readfile() {
  try {
    const data = fs.readFileSync("beispiel.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Es gab einen Fehler beim Lesen der Datei!");
  }
}

function writefile() {
  const content = "Dies ist ein Beispieltext.";
  fs.writeFile("beispiel.txt", content, "utf8", (err) => {
    if (err) {
      console.error("Es gab einen Fehler beim Schreiben in der Datei");
      return;
    }
    console.log("Datei wurde erfolgreich geschrieben!");
  });
}

function editfile(params) {
  try {
    const data = fs.readFileSync("beispiel.txt", "utf8");
    const newText = "Ich rauche Crack";
    const modifiedData = data.replace(data, newText);
    fs.writeFileSync("beispiel.txt", modifiedData, "utf8");
    console.log("Datei erfolgreich bearbeitet");
  } catch (err) {
    console.error("Fehler beim Bearbeiten der Datei:", err);
  }
}

//writefile();
editfile();
