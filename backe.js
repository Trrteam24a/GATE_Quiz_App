const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express(); // server create
const port = 3000;

// route definition
app.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send('hmmmmmmmm123 - html temp home');
});

// server listen
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
