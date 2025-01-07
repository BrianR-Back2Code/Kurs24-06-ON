const { createLogger, format, transports } = require("winston");
const { combine, timestamp, json, printf } = format;
const path = require("path");
const fs = require("fs");

const logDirectory = path.join(__dirname, "logs");

// Prüfen, ob das Verzeichnis existiert
if (fs.existsSync(logDirectory)) {
  console.log("ok");
} else {
  fs.mkdirSync(logDirectory);
  console.log("Verzeichnis erstellt:", logDirectory);
}

const own_timestamp = timestamp({ format: "DD-MM-YYYY HH:mm:ss" });
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});
const logger = createLogger({
  // console.log console.warn console.error
  level: "info", // mindesz-Level
  format: combine(
    // Zeitstempel
    own_timestamp,
    logFormat,
    // JSON
    json()
  ),
  transports: [
    new transports.File({ filename: path.join(logDirectory, "app.log") }),
  ],
});

module.exports = logger;
