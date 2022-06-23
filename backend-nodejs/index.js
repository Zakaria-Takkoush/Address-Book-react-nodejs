require("../backend-nodejs/connection");

const express = require("express"); // import express server
const port = 3000;
const mongoose = require("mongoose");
const User = require("./Models/User");

const app = express(); // create app by initializing express server

app.use(express.json());

app.get("/", function (request, response) {
  response.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
