// connect database
require("../backend-nodejs/connection");

const express = require("express"); // import express server
const port = 3000;
const mongoose = require("mongoose");
const User = require("./Models/User");
const routes = require("./routes");

const app = express(); // create app by initializing express server

app.use(express.json());

// Test API
// app.get("/", function (request, response) {
//   response.send("Hello World");
// });

// app.get("/users", async (req, res) => {
//   const result = await User.find();
//   return res.json(result);
//   console.log(result);
// });

app.use("/api", routes); // use routing

app.listen(port, () => console.log(`Listening on port ${port}...`));
