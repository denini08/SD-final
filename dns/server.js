const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const ip = require("ip");
const path = require("path");
const requestIp = require("request-ip");
const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "img")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(requestIp.mw());
//app.use();

const api = require("./src/routes_api");

app.use("/", new api().routes);

app.listen(3030, () => {
  console.log("DNS started on: " + ip.address() + " port: 3030");
});
