const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./logger");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Dummy-Datenbank
let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

// Endpunkte

// Alle Bücher abrufen
app.get("/books", (req, res) => {
  res.json(books);
});

// Ein Buch hinzufügen
app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ error: "Alle Felder (title, author, year) sind erforderlich." });
  }
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
  logger.info(newBook);
});

// Ein Buch abrufen
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Buch nicht gefunden." });
  }
  res.json(book);
});

// Ein Buch aktualisieren
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Buch nicht gefunden." });
  }
  const { title, author, year } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = year;
  res.json(book);
  logger.info(book);
});

// Ein Buch löschen
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ error: "Buch nicht gefunden." });
  }
  books.splice(bookIndex, 1);
  res.status(204).send();
  logger.info(bookIndex, "wurde gelöscht");
});

// Server starten
app.listen(port, () => {
  console.log(`Book API läuft auf http://localhost:${port}`);
  logger.info(`Server läuft auf http://localhost:${port}`);
});
