const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// app
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error: ", err));

app.get("/", (req, res) => {
  res.send("Hello NodeJS");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
