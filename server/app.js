const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello NodeJS");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
