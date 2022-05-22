const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Goodbye World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
