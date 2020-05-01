"use strict";
const http = require("http");
const randomQuotes = require("./quotes");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    const count = Math.floor(Math.random()) * Math.floor(randomQuotes.length);
    res.write(`${randomQuotes.randomQuotes[count]}`);
    res.end();
  })
  .listen(3000);
