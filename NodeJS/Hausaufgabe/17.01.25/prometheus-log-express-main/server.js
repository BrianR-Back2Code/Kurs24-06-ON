import express from 'express';
import promClient from 'prom-client';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express()
const register = promClient.register;

// Create a log file stream
const logStream = fs.createWriteStream(path.join(__dirname, 'app.log'), { flags: 'a' });

// Set up morgan to log requests to a file
app.use(morgan('combined', { stream: logStream }));

// Create a counter metric to track HTTP requests
const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests made',
  labelNames: ['method', 'status']
});

// Create a histogram metric to track request durations
const httpDurationHistogram = new promClient.Histogram({
  name: 'http_duration_seconds',
  help: 'Histogram of HTTP request durations in seconds',
  buckets: [0.1, 0.5, 1, 2, 5, 10], // Customize these buckets based on your latency needs
  labelNames: ['method', 'status']
});

// Middleware to count HTTP requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsTotal.labels(req.method, res.statusCode).inc();  // Increment counter for each HTTP request
  });
  next();
});

// Middleware to measure request duration
app.use((req, res, next) => {
  const end = httpDurationHistogram.startTimer();  // Start timer when a request is received
  res.on('finish', () => {
    end({ method: req.method, status: res.statusCode });  // Record the request duration when finished
  });
  next();
});

// Route that simulates some latency
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello, World!');
  }, Math.random() * 1000);  // Simulate random delay
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);  // Set the content type for Prometheus to scrape
  res.end(await register.metrics());  // Respond with the current metrics
});

// Start the Express server
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
