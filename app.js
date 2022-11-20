const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const router = require("./router");

app.use("/api", router);

app.all("/*", (req, res) => {
  res.status(404).send({ message: "Bad patash" });
});

module.exports = app;
