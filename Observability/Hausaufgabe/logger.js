const { format, createLogger, transports} = require('winston');
const { timestamp, printf, combine } = format;
const path = require('path');
const fs = require('fs');

// Erstelle unser log-Verzeichnis, falls nicht vorhanden
const logDirectory = path.join(__dirname, 'logs');
if(!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const own_timestamp = timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })

// Zeitangabe [level]: nachricht
const logFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
    level: 'info',
    format: combine(
        own_timestamp,
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(__dirname, 'logs/app.log'), }),
    ]
});

module.exports =  logger ;
