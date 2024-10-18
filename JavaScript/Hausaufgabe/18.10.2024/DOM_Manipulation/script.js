document.addEventListener("DOMContentLoaded", function () {
  /* Aufgabe 1: Textelement auswählen und ändern

Ziel: Nutze JavaScript, um den Text eines Elements zu ändern.

Aufgabe: Füge ein <h2> -Element mit dem Text "Willkommen" in dein HTML-
Dokument ein. Verwende JavaScript, um diesen Text zu "Herzlich Willkommen!" zu

ändern.
Tipp: Nutze document.getElementById() */
  let text_input;
  document.getElementById("clickme").onclick = function () {
    text_input = document.getElementById("input").value;
    document.getElementById(
      "text"
    ).textContent = `Hallo ${text_input} Herzlich Willkommen!`;
  };

  /* Aufgabe 2: Stile ändern

Ziel: Ändere das Styling eines Elements.
Aufgabe: Erstelle einen <button> mit dem Text "Ändere Farbe". Wenn auf den
Button geklickt wird, soll der Hintergrund des Buttons zu einer zufälligen Farbe
wechseln.
Tipp: Verwende style.backgroundColor und eine Funktion, die zufällige Farben
generiert. */

  document.getElementById("colorchange").onclick = function () {
    document.getElementById("color");
    color.style.backgroundColor = "pink";
  };

  /* Aufgabe 3: Liste von Elementen erstellen

Ziel: Arbeite mit einer HTMLCollection.
Aufgabe: Erstelle eine Liste ( <ul> ) mit drei <li> -Elementen (z.B. "Apfel",
"Banane", "Orange"). Verwende JavaScript, um den Text des zweiten Elements in
"Mango" zu ändern.
Tipp: Nutze document.getElementsByTagName() . */
  document.getElementById("listbutton").onclick = function () {
    const fruit = "Mango";
    const list = document.getElementsByTagName("li");
    list[1].innerHTML = fruit;
  };
  /* Aufgabe 4: Dynamisch ein Element hinzufügen

Ziel: Lerne, wie man Elemente dynamisch erstellt und dem DOM hinzufügt.
Aufgabe: Erstelle eine leere <div> -Box in deinem HTML. Füge mithilfe von
JavaScript ein neues <p> -Element hinzu, das den Text "Dies ist ein neuer Absatz"
enthält.
Tipp: Verwende document.createElement() und appendChild() */
  document.getElementById("pp_grow").onclick = function () {
    let newdiv = document.createElement("p");
    newdiv.textContent = "Dies ist ein neuer Absatz";
    document.body.appendChild(newdiv);
  };

  /* Aufgabe 5: Element mit einem Event Listener
versehen

Ziel: Lerne, wie man Event Listener einsetzt.
Aufgabe: Erstelle ein <button> mit dem Text "Klick mich". Wenn der Button
geklickt wird, soll ein neues <p> -Element mit dem Text "Button wurde geklickt!"
unterhalb des Buttons erscheinen.
Tipp: Nutze addEventListener() und appendChild() */

  document.getElementById("clickbait").onclick = function () {
    this.addEventListener("click", () => {
      new_button = document.createElement("p");
      new_button.textContent = "Alarm!!";
      document.body.appendChild(new_button);
    });
  };

  /* Aufgabe 6: Interaktive Farbänderung

Ziel: Dynamische Manipulation von Elementen basierend auf
Benutzerinteraktionen.
Aufgabe: Erstelle eine <div> -Box mit der Klasse "box" und einer Größe von
100x100 Pixeln. Wenn die Maus über die Box fährt, soll sie ihre Farbe ändern. Wenn
die Maus die Box verlässt, soll die Farbe wieder zur Ausgangsfarbe wechseln.
Tipp: Nutze mouseover und mouseout Events. */
  const box = document.querySelector(".box");

  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
  });

  box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "blue"; // Zurück zur ursprünglichen Farbe
  });
  /* Aufgabe 7: Eingabewert auslesen und anzeigen

Ziel: Arbeite mit Formular- und Eingabeelementen.
Aufgabe: Erstelle ein <input> -Feld und einen <button> mit dem Text "Absenden".
Wenn der Button geklickt wird, soll der eingegebene Text unterhalb des Buttons in
einem neuen <p> -Element angezeigt werden.
Tipp: Verwende getAttribute() und textContent . */

  document.getElementById("maybenot").onclick = function () {
    document.getElementById("change").textContent = `Aufgabe 7 `;
  };

  /* Aufgabe 8: Elemente anhand von Klasse auswählen
und manipulieren
Ziel: Übe den Umgang mit getElementsByClassName() .
Aufgabe: Füge drei <div> -Elemente mit der Klasse "box" hinzu. Schreibe ein
Skript, das die Hintergrundfarbe aller Boxen gleichzeitig auf blau ändert, wenn auf
eine beliebige Box geklickt wird.
Tipp: Nutze eine Schleife, um über die HTMLCollection zu iterieren. */
  /* Aufgabe 8: Elemente anhand von Klasse auswählen
und manipulieren
Ziel: Übe den Umgang mit getElementsByClassName() .
Aufgabe: Füge drei <div> -Elemente mit der Klasse "box" hinzu. Schreibe ein
Skript, das die Hintergrundfarbe aller Boxen gleichzeitig auf blau ändert, wenn auf
eine beliebige Box geklickt wird.
Tipp: Nutze eine Schleife, um über die HTMLCollection zu iterieren. */
  //this.addEventListener("click", () => {
  const boxxie = document.getElementsByClassName("boxxie");

  for (let index = 0; index < boxxie.length; index++) {
    boxxie[index].addEventListener("click", function () {
      for (let j = 0; j < boxxie.length; j++) {
        boxxie[index].style.backgroundColor = "red"; // Zurück zur ursprünglichen Farbe}
      }
    });
  }

  /* Aufgabe 9: Neues Element vor einem bestehenden
hinzufügen

Ziel: Lerne, wie man Elemente gezielt an bestimmten Stellen im DOM einfügt.
Aufgabe: Erstelle eine <ul> -Liste mit zwei <li> -Elementen ("Item 1" und "Item
2"). Verwende JavaScript, um ein neues <li> -Element mit dem Text "Neues Item"
vor "Item 1" einzufügen.
Tipp: Verwende insertBefore() . */
  document.getElementById("insertbefore").onclick = function () {
    const item = document.getElementById("insertitem").value;
    const newItem = document.createElement("li");
    newItem.textContent = item;
    const list = document.getElementById("mylist");

    const first_item = document.getElementsByTagName("li")[0];
    list.insertBefore(newItem, first_item);
  };
});
