/* Grundlegende Array-Operationen
Verstehen und Anwenden von grundlegenden Array-Methoden.
● Erstelle ein Array mit den Zahlen 1 bis 10.
● Füge die Zahl 11 am Ende des Arrays hinzu.
● Entferne die erste Zahl aus dem Array.
● Finde und gib die Position der Zahl 5 im Array aus.
● Überprüfe, ob die Zahl 7 im Array enthalten ist. */

const meinarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

meinarray.push(11);
// Kontrolle ob die 11 hinzugefügt wurde.
//console.log(meinarray[10]);

meinarray.splice(0, 1);
// Kontrolle ob die erste Zahl in meinen Array entfernt wurde.
//console.log(meinarray);

// Funktion für das Finden einer Zahl
function findposition(num) {
  for (i = 0; i < meinarray.length; i++) {
    if (meinarray[i] == num) {
      console.log(
        "Die " +
          num +
          " befindet sich an der Position " +
          i +
          " und beinhaltet den Wert " +
          meinarray[i]
      );
      break;
    } else {
      console.log("Es wurde nichts gefunden");
    }
  }
}

/* Arbeiten mit Schleifen und Arrays
Arrays iterieren und deren Elemente verarbeiten.
● Erstelle ein Array mit den Namen von fünf verschiedenen Städten.
● Iteriere über das Array und gib jede Stadt in Großbuchstaben aus.
● Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen
speichert. */
let meinestädte = ["Berlin", "Erfurt", "Magdeburg", "Halle", "Hannover"];
function Städte() {
  for (let i = 0; i < meinestädte.length; i++) {
    console.log(meinestädte[i].toUpperCase());
  }
}

function count() {
  let max_count_stadt = [];
  for (let index = 0; index < meinestädte.length; index++) {
    let maxnumber = meinestädte[index].length; // Länge der Stadt
    for (let y = 0; y < maxnumber; y++) {
      // console.log(y + 1); // Ausgabe der Zahlen + 1 weil Array bei 0 anfängt
    }
    // console.log("Buchstabenanzahl:", maxnumber); // Testausgabe ob die richtige Anzahl der Buchstaben vorhanden ist

    max_count_stadt.push(maxnumber);
    console.log(
      "Die Stadt " +
        meinestädte[index] +
        " hat eine Buchstabenanzahl von " +
        max_count_stadt[index]
    );
  }
}

/* Filterung und Extra

Verwenden von filter() und reduce().
● Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20
Zahlen).
● Filtern Sie alle geraden Zahlen in einem neuen Array heraus.
● Berechne die Summe aller gefilterten geraden Zahlen. */

function randnum() {
  randnumber = Math.floor(Math.random() * 100);
  return randnumber;
}

function random_even_num() {
  let evenarray = [];
  for (let index = 0; index <= 20; index++) {
    let randomnumber = randnum();
    evenarray.push(randomnumber);
  }
  even_num = evenarray.filter((even) => even % 2 == 0);
  console.log(even_num);
  let even_sum = even_num.reduce((acc, num) => acc + num, 0);
  console.log(even_sum);
}

/* Zweidimensionale Arrays
Verständnis und Manipulation von zweidimensionalen Arrays.
● Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1
bis 9 gefüllt ist.

● Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links
nach unten rechts) berechnet.
● Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.*/

function TwoDArray_sum() {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let dia_sum = 0;
  for (let i = 0; i < array.length; i++) {
    dia_sum += array[i][i];
  }
  console.log("Die Diagonalsumme ist:", dia_sum);
}

function transform_2D_matrix(params) {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  array[0][0] = 0; // oben links
  array[0][2] = 0; // oben rechts
  array[2][0] = 0; // unten links
  array[2][2] = 0; // unten rechts
  console.log("Die Matrix wurde verwandelt:");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

findposition(5);
findposition(7);
Städte();
count();

random_even_num();
TwoDArray_sum();
transform_2D_matrix();

/* Hoffe das Kontrollieren hat Spaß gemacht */
