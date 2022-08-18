const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// import route
const userRoutes = require("./routes/user");

// app
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error: ", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
