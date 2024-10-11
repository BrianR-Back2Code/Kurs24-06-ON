const Frage_1 = "Wird 'var' noch oft benutzt?";
const Frage_2 = "Hast du deine Hausaufgaben gemacht?";
const Frage_3 = "Wieviele Finger werden gezeigt?";

let score = 0;
let falseflag = 0;

if (falseflag == 2) {
  alert("Zu viele Falsche Antworten");
  throw new Error("Etwas ist schief gelaufen!");
} else {
  let a = prompt("Frage 1 : " + Frage_1);
  if (a == "Nein") {
    alert("Antwort " + a + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    falseflag = falseflag + 1;
  }
}

if (falseflag == 2) {
  alert("Zu viele Falsche Antworten");
  throw new Error("Etwas ist schief gelaufen!");
} else {
  let b = prompt("Frage 2 : " + Frage_2);
  if (b == "Ja") {
    alert("Antwort " + b + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    score = score - 1;
    falseflag = falseflag + 1;
  }
}
if (falseflag == 2) {
  alert("Zu viele Falsche Antworten");
  throw new Error("Etwas ist schief gelaufen!");
} else {
  let c = prompt("Frage 3 : " + Frage_3);
  if (c == "Keine") {
    alert("Antwort " + c + " ist Richtig");
    score = score + 1;
  } else {
    alert("Das ist Falsch");
    score = score - 1;
    falseflag = falseflag + 1;
  }
}
console.log("Dein Score ist " + score);
