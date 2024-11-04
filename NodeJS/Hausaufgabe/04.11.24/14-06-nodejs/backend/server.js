import express from "express";
import cors from "cors";
import fs from "fs";

const server = express();
const PORT = 4000;

server.use(cors());
server.use(express.json()); // JSON-Parsing-Middleware hinzufügen

const todosFilePath = "./todos.json";

const readTodosFromFile = () => {
  try {
    const data = fs.readFileSync(todosFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Fehler beim Lesen der Datei:", error);
    return [];
  }
};

const writeTodosToFile = (todos) => {
  try {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Fehler beim Schreiben in die Datei:", error);
  }
};

server.get("/", (req, res) => {
  res.send("Hi");
});

server.get("/todos", (req, res) => {
  const todos = readTodosFromFile();
  res.json(todos);
});

server.post("/todos", (req, res) => {
  const newTodo = req.body;
  const todos = readTodosFromFile();

  // Neues To-Do zur Liste hinzufügen
  todos.push(newTodo);

  // Liste in die Datei schreiben
  writeTodosToFile(todos);

  res.status(201).json(newTodo);
});

server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
