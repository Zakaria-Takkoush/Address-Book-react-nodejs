const express = require("express"); // import express server
const port = 4000;

const app = express(); // create app by initializing express server

app.use(express.json);

app.get("/", (res, req) => {
  res.json("Hello!");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
