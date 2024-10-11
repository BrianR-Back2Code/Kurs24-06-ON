const Frage_1 = "Wird 'var' noch oft benutzt?";
const Frage_2 = "Hast du deine Hausaufgaben gemacht?";
const Frage_3 = "Wieviele Finger werden gezeigt?";

let score = 0;
if (score == -2) {
} else {
  let a = prompt("Frage 1 : " + Frage_1);
  if (a == "Nein") {
    alert("Antwort " + a + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    score = score - 1;
  }

  let b = prompt("Frage 2 : " + Frage_2);
  if (b == "Ja") {
    alert("Antwort " + b + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    score = score - 1;
  }

  let c = prompt("Frage 3 : " + Frage_3);
  if (c == "Keine") {
    alert("Antwort " + c + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    score = score - 1;
  }
}

console.log(a);
console.log(b);
console.log(c);
