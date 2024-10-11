alert("Hallo , Java Script läuft");

let a = "Hallo";
const b = "Konstant Bruder";
var c = "Warum werde ich benutzt?";
let d = false;
let e = 300;
let f = "Hallo ich bin String";
let Array = ["Crack", "Meth", "Alkohol"];
let Objekt = {
  Name: "String",
  num: 42,
  kluk: false,
};

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

let score = 85;
if (score >= 90) {
  console.log("Ausgezeichnet!");
} else if (score >= 75) {
  console.log("Gut gemacht!");
} else {
  console.log("Mehr Übung erforderlich.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i); // Gibt 1 bis 10 aus
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let alarm = 10;
for (let i = 0; i <= alarm; i++) {
  console.log(i);
  if (i == 0) {
    alert("Vallah Aufstehen!!");
  }
}

console.log(Array[0]);

for (let i = 0; i < 3; i++) {
  console.log(Array[i]);
}

console.log(Objekt.Name, Objekt.num, Objekt.kluk);

function greet() {
  const test = "Max";
  return alert("Hallo " + test);
}

greet();
