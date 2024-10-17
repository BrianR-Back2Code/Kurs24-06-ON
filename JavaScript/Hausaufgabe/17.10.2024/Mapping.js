/* 
# Aufgabe 1: Benutzerverwaltung mit `Map`
1. Erstellen Sie eine `Map` namens `benutzerVerwaltung`, die Benutzernamen als Schlüssel und Objekte als Werte speichert. 
Die Objekte sollen folgende Eigenschaften enthalten:
   - `email` (z.B. `'benutzer123@example.com'`)
   - `rolle` (z.B. `'Admin'`, `'User'` oder `'Gast'`)
2. Fügen Sie mindestens drei Benutzer zur `Map` hinzu.
3. Erstellen Sie eine Funktion `zeigeBenutzer`, die alle Benutzer und deren Details im Format `"Benutzername: E-Mail, Rolle"` ausgibt.

**Hinweis:** Nutzen Sie `.set()`, `.get()` und `.forEach()`. */

function show_User() {
  const user_management = new Map();

  user_management.set("Username", { email: "user@gmail.com", rolle: "Gast" });
  user_management.set("User1", { email: "user1@gmail.com", rolle: "User" });
  user_management.set("Kat", { email: "thrine@gmail.com", rolle: "Admin" });
  user_management.forEach((value, key) => {
    console.log(
      `User : ${key}  Email : ${value.email}, Rolle :  ${value.rolle}`
    );
  });
}

show_User();

/* # Aufgabe 2: Eindeutige Einträge mit `Set`
1. Erstellen Sie ein `Set` namens `besuchteSeiten`, um die Namen von Seiten zu speichern, die ein Benutzer besucht hat 
(z.B. `'Startseite'`, `'Profil'`, `'Einstellungen'`).
2. Fügen Sie mindestens fünf Seitennamen zum `Set` hinzu, wobei zwei Namen dupliziert sein sollten.
3. Geben Sie die Anzahl der eindeutigen Seiten aus.
4. Schreiben Sie eine Funktion `zeigeSeiten`, die alle Seitennamen im Format `"Besuchte Seite: [Name]"` ausgibt.

**Tipp:** Verwenden Sie `.add()`, `.has()`, und `.size`. */

function visit_site() {
  besuchte_seiten = new Set();
  besuchte_seiten
    .add("Startseite")
    .add("Mein_Profil")
    .add("Einstellungen")
    .add("Lexikon")
    .add("Mein_Profil")
    .add("Startseite");
  console.log(besuchte_seiten.size);
  for (const item of besuchte_seiten) {
    console.log("Besuchte Seiten :  " + item);
  }
}

visit_site();
