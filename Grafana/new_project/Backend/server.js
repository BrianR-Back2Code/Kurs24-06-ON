const express = require("express");
const logger = require("./logger"); // Stelle sicher, dass `logger.js` existiert!
const app = express();
const PORT = 5001;

// Route für die Wurzel ("/")
app.get("/", (req, res) => {
  res.send("Hello World");
  logger.info("Wurzelroute wurde aufgerufen");
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
  logger.info(`Server läuft auf http://localhost:${PORT}`);
});
