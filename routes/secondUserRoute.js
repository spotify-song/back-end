const express = require("express");
const redis = require("redis");

const client = redis.createClient(process.env.REDIS_URL);

const route = express.Router();

route.post("/", (req, res) => {
  const credentials = req.body;
  console.log("credential", credentials);
  client.set("username", JSON.stringify(credentials));
  res.status(201).json(credentials);
});

route.get("/getuser", (req, res) => {
  client.get("username", (err, data) => {
    if (err) {
      console.log("we dont have it yet.");
      res.status(500).json({ errorMessage: "there was an error ", error: err });
    }
    if (data !== null) {
      let credentials = JSON.parse(data);
      res.status(200).json(credentials);
    }
  });
});

module.exports = route;
