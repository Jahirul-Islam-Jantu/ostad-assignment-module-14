const express = require("express");

const route = require("./src/routes/api");

const app = new express();

const ratelimit = require("express-rate-limit");

const helmet = require("helmet");

const hpp = require("hpp");

const cors = require("cors");

const mongoose = require("mongoose");
const router = require("./src/routes/api");

app.use(cors());

app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

const limiter = ratelimit({ window: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

let URL = "mongodb://localhost:27017/taskmanager";

let OPTION = { user: "", pass: "", autoIndex: true };
mongoose
  .connect(URL, OPTION)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);
app.use("/*", (req, res) => {
  res.status(404).json({ data: "Not Found" });
});

module.exports = app;
