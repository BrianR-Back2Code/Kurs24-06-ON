import express from "express";
import cors from "cors";
import fs from "fs";

const server = express();
const PORT = 4000;

server.use(cors());
server.use(express.json());

const todosFilePath = "./todos.json";

// Hilfsfunktion zum Lesen der To-Dos aus der Datei
const readTodosFromFile = () => {
  try {
    const data = fs.readFileSync(todosFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Fehler beim Lesen der Datei:", error);
    return [];
  }
};

// Hilfsfunktion zum Schreiben der To-Dos in die Datei
const writeTodosToFile = (todos) => {
  try {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Fehler beim Schreiben in die Datei:", error);
  }
};

// Funktion zur Ermittlung der nächsten To-Do-ID
const getNextTodoId = (todos) => {
  if (todos.length === 0) {
    return 1;
  }
  return Math.max(...todos.map((todo) => todo.id || 0)) + 1;
};

// Funktion zur Ermittlung der nächsten Benutzer-ID (userId)
const getNextUserId = (todos) => {
  const userIds = todos
    .map((todo) => todo.userId)
    .filter((id) => id !== undefined);
  if (userIds.length === 0) {
    return 1;
  }
  return Math.max(...userIds) + 1;
};

// Route zum Abrufen aller To-Dos
server.get("/todos", (req, res) => {
  const todos = readTodosFromFile();
  res.json(todos);
});

// Route zum Abrufen eines spezifischen To-Dos anhand der ID
server.get("/todos/byid/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todos = readTodosFromFile();
  const todo = todos.find((item) => item.id === todoId);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("To-Do mit dieser ID nicht gefunden");
  }
});

// Route zum Abrufen aller To-Dos eines bestimmten Benutzers anhand der userId
server.get("/todos/byuserid/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const todos = readTodosFromFile();
  const userTodos = todos.filter((item) => item.userId === userId);

  if (userTodos.length > 0) {
    res.json(userTodos);
  } else {
    res.status(404).send("Keine To-Dos für diese userId gefunden");
  }
});

// Route zum Hinzufügen eines neuen To-Dos
server.post("/todos", (req, res) => {
  const newTodo = req.body;
  const todos = readTodosFromFile();

  if (!newTodo.userId) {
    newTodo.userId = getNextUserId(todos);
  }

  newTodo.id = getNextTodoId(todos);

  todos.push(newTodo);
  writeTodosToFile(todos);

  res.status(201).json(newTodo);
});

server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
