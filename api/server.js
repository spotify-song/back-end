const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const userTwoRoute = require("../routes/secondUserRoute");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/usertwo", userTwoRoute);

server.get("/", (req, res) => {
  res.json("its running.");
});

module.exports = server;
