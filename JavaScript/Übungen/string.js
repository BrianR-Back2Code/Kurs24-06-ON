/* String Verkettung
Schreibe ein Programm, das den Namen und das Alter einer Person als Variablen
speichert und eine Begrüßung in der Form “Hallo, [Name]. Du bist [Alter] Jahre alt.”
ausgibt. */

const name = "        IrgendeinName";
const alter = "30";

console.log("Hallo " + name + " du bist " + alter + " alt!");

/* 2. Template String
Schreibe ein Programm, das die Variablen `vorname`, `nachname` und
`stadt`speichert und eine Vorstellung in der Form “Ich heiße [Vorname] [Nachname]
und komme aus [Stadt].” ausgibt. */

const vorname = "vorname";
const nachname = "nachname";
const stadt = "stadt";

console.log(`Ich heiße ${vorname} ${nachname} und komme aus ${stadt}`);

/* 3. String-Methoden
Gib deinen vollständigen Namen mit der Methode `toLowerCase()`und
`toUpperCase`auf der Konsole aus und entferne mit `trim()`alle überflüssigen
Leerzeichen. */

console.log(name.trim().toLowerCase());
console.log(name.trim().toUpperCase());

/* 4. String-Interpolation in Funktionen
Erstelle eine Funktion namens `begruesse`, die einen Namen als Parameter nimmt
und “Willkommen, [Name]!” zurückgibt. */

function greet(Name) {
  greeting = `Willkommen ${Name}`;
  return greeting;
}

console.log(greet("Teilnehmer"));

/* 5. Verwendung von replace()
Schreibe ein Programm, das einen Satz enthält und das Wort “schlecht” durch
“großartig” ersetzt. Gib den neuen Satz aus. */

let zustand = "schlecht";
let neuerzustand = "großartig";

console.log(zustand.replace(zustand, neuerzustand));
