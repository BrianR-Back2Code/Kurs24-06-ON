const express = require("express");
const app = express();
const logger = require("./logger");

const port = 5001;

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Wurzel Route aufgerufen");
  logger.info("Wurzel Route aufgerufen");
});

app.get("/Hallo", (req, res) => {
  logger.info(`Request: ${req.method} ${req.url} - Status: ${res.statusCode}`);
  res.status(200).send("Hallo Welt");
});

app.get("/Error", (req, res) => {
  res.status(404).send("Fehler");
  logger.info(`Request: ${req.method} ${req.url} - Status: ${res.statusCode}`);
});

app.listen(port, () => {
  console.log(`Server läuft auf ${port}`);
  logger.info(`Server läuft auf ${port}`);
});
