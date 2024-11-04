// server.mjs
import { createServer } from "node:http";
import inspirationalQuotes from "inspirational-quotes";

const server = createServer((req, res) => {
  const quote = inspirationalQuotes.getQuote();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1 style="color: red;">${quote.text}</h1>`);
});

// Server starten
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
