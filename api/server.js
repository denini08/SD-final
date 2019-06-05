const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const bodyParser = require("body-parser");
const cors = require("cors");
var logger = require("morgan");
const ip = require("ip");
mongoose.connect("mongodb://localhost:27016/api?replicaSet=rs0", {
  useNewUrlParser: true
});

const app = express();
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = require("./src/routes_api");

app.use("/api", new api().routes);

app.listen(3002, () => {
  console.log("Server started on: " + ip.address() + " port: 3002");
});
