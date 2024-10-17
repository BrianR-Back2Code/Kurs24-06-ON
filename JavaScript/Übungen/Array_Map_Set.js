/* Aufgabe 1: Wiederholung - Arrays

1. Erstellen Sie ein Array namens autos , das die Werte 'BMW' , 'Audi' und
'Mercedes' enthält.
2. Greifen Sie auf das zweite Element zu und geben Sie es aus.
3. Fügen Sie das Auto 'Volkswagen' hinzu und geben Sie das gesamte Array aus.
4. Iterieren Sie über das Array und geben Sie jedes Auto in Großbuchstaben aus. */

function Auto() {
  arr_car = ["BMW", "Audi", "Mercedes"];
  console.log(arr_car[1]);
  arr_car.push("Volkswagen");
  for (let index = 0; index < arr_car.length; index++) {
    console.log(arr_car[index].toUpperCase());
  }
}

//Auto();

/* Aufgabe 2: Erste Schritte mit Map

1. Erstellen Sie eine Map namens stadtMap .
2. Fügen Sie folgende Paare hinzu:
'Berlin' : 'Deutschland'
'Paris' : 'Frankreich'

3. Greifen Sie auf den Wert des Schlüssels 'Berlin' zu und geben Sie ihn aus.
4. Überprüfen Sie, ob der Schlüssel 'Rom' in der Map existiert. 
Aufgabe 3: Iteration über Map

1. Erweitern Sie die stadtMap um 'Rom' : 'Italien' .
2. Iterieren Sie mit .forEach() und geben Sie jedes Paar im Format "Stadt: Land"
aus.*/

function maps() {
  const stadt_map = new Map();

  stadt_map.set("Stadt1", { Bundesland: "Berlin", Land: "Deutschland" });
  stadt_map.set("Stadt2", { Bundesland: "Paris", Land: "Frankreich" });
  console.log(stadt_map.get("Stadt1"));
  console.log(stadt_map.has("Rom"));
  stadt_map.set("Stadt3", { Bundesland: "Rom", Land: "Italien" });

  stadt_map.forEach((value, key) => {
    console.log(
      `${key}: Bundesland = ${value.Bundesland}, Land = ${value.Land}`
    );
  });
}

//maps();

/* Aufgabe 4: Erste Schritte mit Set

1. Erstellen Sie ein Set namens buchstabenSet und fügen Sie die Buchstaben 'A' ,
'B' und 'C' hinzu.
2. Überprüfen Sie, ob der Buchstabe 'D' im Set existiert.
3. Fügen Sie den Buchstaben 'A' erneut hinzu und geben Sie die Anzahl der
Elemente im Set aus. */
function set_letter(params) {
  let buchstaben_set = new Set();
  buchstaben_set.add("A");
  buchstaben_set.add("B");
  buchstaben_set.add("C");
  buchstaben_set.has("D");

  for (const item of buchstaben_set) {
    console.log(buchstaben_set.has(item));
  }
}

//set_letter();
/* Aufgabe 5: Iteration über Set

1. Erstellen Sie ein Set namens farbenSet mit den Farben 'Gelb' , 'Grün' und
'Blau' .
2. Iterieren Sie mit einer for...of -Schleife und geben Sie jede Farbe im Format
"Farbe: [Farbe]" aus. */
function color_set() {
  let set_color = new Set();
  set_color.add("Gelb");
  set_color.add("Grün");
  set_color.add("Blau");
  for (const item of set_color) {
    console.log("Farbe : " + item);
  }
}

/* Aufgabe 6: Praktische Anwendung - Map für Bücher

1. Erstellen Sie eine Map namens buecherMap , die Informationen über drei Bücher
speichert (Titel als Schlüssel und Objekt mit Autor und Seitenanzahl als Wert).
Beispiel: 'Der Alchemist' : {autor: 'Paulo Coelho', seiten: 198}

2. Greifen Sie auf die Seitenanzahl des Buches 'Der Alchemist' zu und geben Sie sie
aus.
3. Iterieren Sie über die buecherMap und geben Sie jedes Buch und seine
Eigenschaften aus. */

function buecher_map() {
  buechermap = new Map();
  buechermap.set("Der Alchemist", { Autor: "Paulo Coelho", Seiten: "198" });
  buechermap.set("Assburger", { Autor: "Eric Cartman", Seiten: "50" });
  buechermap.set("Crackhead Addicition", {
    Autor: "Irgendein Crackhead",
    Seiten: "300",
  });
  console.log(buechermap.get("Der Alchemist").Seiten);

  buechermap.forEach((value, key) => {
    console.log(
      `Titel : ${key}: Autor : ${value.Autor}, Seiten : ${value.Seiten}`
    );
  });
}

//buecher_map();

/* Aufgabe 7: Praktische Anwendung - Set für
Sportarten

1. Erstellen Sie ein Set namens sportartenSet , das die Sportarten 'Fußball' ,
'Basketball' , und 'Tennis' enthält.
2. Überprüfen Sie die Anzahl der einzigartigen Sportarten im Set.
3. Entfernen Sie 'Basketball' und geben Sie die aktualisierte Größe des Sets aus. */

function Sports() {
  let Sportarten = new Set();
  Sportarten.add("Fussball").add("Basketball").add("Tennis");
  Sportarten.add("Basketball");
  Sportarten.add("Tennis");
  console.log(Sportarten);
  console.log(Sportarten.size);
  for (const item of Sportarten) {
    console.log(item);
  }
  Sportarten.delete("Basketball");
  console.log(Sportarten);
  for (const item of Sportarten) {
    console.log(item);
  }
}
Sports();
