/* Erstelle eine Funktion bestimmeKategorie(), die ein Alter als Parameter erhält und
bestimmt, zu welcher Alterskategorie eine Person gehört. Die Kategorien sind wie
folgt definiert:
● "Kind" für Personen im Alter von 0 bis 12 Jahren.
● "Jugendlicher" für Personen im Alter von 13 bis 17 Jahren.
● "Erwachsener" für Personen im Alter von 18 bis 64 Jahren.
● "Senior" für Personen ab 65 Jahren.
Verwende eine if-else Anweisung für die Implementierung. */

function getage() {
  return Math.floor(Math.random() * 100);
}

function checkage() {
  let age = getage();
  if (age <= 12) {
    console.log("Alter = " + age + " Du bist ein Kind");
  } else if (age <= 17) {
    console.log("Alter = " + age + " Du bist Jugendlich");
  } else if (age <= 64) {
    console.log("Alter = " + age + " Du bist Erwachsen");
  } else {
    console.log("Alter = " + age + " Du bist ein Senior");
  }
}

/* Schreibe eine Funktion interpretiereWetter, die einen String mit der Bezeichnung
einer Wetterlage erhält und eine entsprechende Aktivität vorschlägt. Die Wetterlagen
und Aktivitäten sind wie folgt:
● "Sonnig" soll "Gehe spazieren" vorschlagen.
● "Regnerisch" soll "Bleibe zu Hause und lese ein Buch" vorschlagen.
● "Schnee" soll "Baue einen Schneemann" vorschlagen.
● "Windig" soll "Fliege einen Drachen" vorschlagen.
Verwende eine switch-case Anweisung zur Implementierung. */

function interpretiereWetter() {
  const Wetter = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
  let iWetter = Math.floor(Math.random() * 4);
  return Wetter[iWetter];
}

function What_Should_i_do() {
  let weatherboi = interpretiereWetter();

  switch (weatherboi) {
    case "Sonnig":
      console.log("Es ist " + weatherboi + " geh spazieren");
      break;
    case "Regnerisch":
      console.log(
        "Es ist " + weatherboi + " bleib mal zu hause und lese ein Buch"
      );
      break;
    case "Schnee":
      console.log("Es liegt " + weatherboi + " Baue einen Schneemann");
      break;
    case "Windig":
      console.log("Es ist " + weatherboi + " lass einen Drachen steigen");
      break;

    default:
      break;
  }
}

checkage();
What_Should_i_do();
