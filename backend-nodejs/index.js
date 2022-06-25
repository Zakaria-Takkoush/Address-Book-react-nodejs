// connect database
require("../backend-nodejs/connection");

//.env
require("dotenv").config();

const express = require("express"); // import express server
const port = 8080;
const mongoose = require("mongoose");
const User = require("./Models/User");
const routes = require("./routes");
const cors = require("cors");

const app = express(); // create app by initializing express server
app.use(cors());
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

const auth = require("./middleware/auth");

// Test auth middleware
app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.use("/api", routes); // use routing

app.listen(port, () => console.log(`Listening on port ${port}...`));
