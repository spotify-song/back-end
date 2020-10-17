const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userTwoRoute = require("../routes/secondUserRoute");

const spotifyAuth = require("../routes/spotifyAuth");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use("/usertwo", userTwoRoute);
app.use("/test", spotifyAuth);

app.get("/", (req, res) => {
  res.json("its running.");
});

module.exports = app;
