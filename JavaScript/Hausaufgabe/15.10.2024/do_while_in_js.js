/* Summiere gerade Zahlen
Erstelle eine Funktion, die alle geraden Zahlen von 1 bis einschließlich 100 summiert.
● Verwende eine do-while-Schleife, um durch die Zahlen von 1 bis 100 zu iterieren.
● Prüfe innerhalb des Schleifenblocks, ob eine Zahl gerade ist, und addiere sie zur
Summe */

function while_even_num() {
  let num = 0;
  let count = 0;
  while (count <= 100) {
    if (count % 2 == 0) {
      num += count;
    }
    count++;
    //console.log(count);
  }
  return num;
}
//let sum_of_while_num = while_even_num();
//console.log("Summe der While-Schleife: " + sum_of_while_num);

/* Ziffernsumme einer Zahl
Erstelle eine Funktion, die die Ziffernsumme einer gegebenen positiven ganzen Zahl
berechnet.
● Verwende eine do-while-Schleife, um die Summe zu ermitteln.
● Implementiere die Funktion so, dass sie für jede Ziffer der Zahl berechnet und zur
Summe addiert.
● Bsp.: 248 = 2 + 4 + 8 = 14 */

// Testweise eine for Schleife gebaut um das Grundprinzip zu verstehen
function array_of_num() {
  const str = "248"; // eine String der benötig um ihn in ein einzelnes Element zu zersetzen.
  let num = 0; // Einfach eine Variable
  let count = 0; // Zähler oder für was auch immer
  for (i = 0; i <= str.length; i++) {
    // Number wandelt den String in einer zahl um und charAt gibt mir den Inhalt der sich an Stelle i befindet aus.
    // dies bezweckt das ich mit dem element arbeiten kann in dem fall mit der nächsten zahl adddieren.
    //Index:     1 2 3
    //String :   2 4 8
    //
    num = Number(str.charAt(i));
    count += num;
  }
  return count;
}

function lenght_of_string() {
  const str = "248";
  let num = 0;
  let count = 0;
  let i = 0;

  while (i <= str.length) {
    num = Number(str.charAt(i));
    count += num;
    i++;
  }
  return count;
}

let result = lenght_of_string();
console.log(result);

/* Zähle Elemente, die größer als ein bestimmter
Schwellenwert sind

Erstelle eine Funktion, die die Anzahl der Elemente in einem Array zählt, die größer als ein
vorgegebener Schwellenwert sind.
Vorgegebene Daten:
● Verwendet das folgende Array: [10, 23, 35, 47, 52, 66, 71, 88, 90]
● Der Schwellenwert sei 50
Implementiere die Funktion in einer for-Schleife
Implementiere die Funktion in einer while-Schleife
Implementiere die Funktion in einer do-while-Schleife
Hinweis: Alle drei Schleifenarten können in eine Datei geschrieben werden! */

function sum_of_schwellenwert() {
  let meinArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
  let count_of_schwellenwert = 0;
  for (let index = 0; index < meinArray.length; index++) {
    let n = meinArray[index]; // beinhaltet den Inhalt des Arrays
    //console.log(n); // Testen des Inhalts
    if (n > 50) {
      count_of_schwellenwert++;
    } else {
      // console.log("Weitermachen Zahl ist kleiner als 50");
    }
  }
  return count_of_schwellenwert;
}

let ergebnis = sum_of_schwellenwert();
console.log("Es waren " + ergebnis + " Elemente über den Schwellenwert");
