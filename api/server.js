const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const userTwoRoute = require("../routes/secondUserRoute");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/usertwo", userTwoRoute);

app.get("/", (req, res) => {
  res.json("its running.");
});

module.exports = app;
