const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const router = require("./router");

app.use("/api", router);

app.all("/*", (req, res) => {
  res.status(404).send({
    message:
      "Bad path - only two endpoints available: \n 1. /api/image for general image recognition model. \n 2. /api/rps for rock paper scissors recognition model. \n Both expect body of {body: url} where url is a string",
  });
});

module.exports = app;
