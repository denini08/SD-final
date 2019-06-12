const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const bodyParser = require("body-parser");
const cors = require("cors");
var logger = require("morgan");
const ip = require("ip");
const request = require("request");

const DNS = "http://localhost:3030/keepAlive";
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

var cron = require("node-cron");

var task = cron.schedule("*/30 * * * * *", () => {
  request(DNS, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body); // Print the google web page.
    } else {
      console.log("erro", error);
    }
  });
});
