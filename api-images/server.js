const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const ip = require("ip");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(fileupload());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "img")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = require("./src/routes_api");

app.use("/", new api().routes);

app.listen(3009, () => {
  console.log(
    "Servidor de imagens started on: " + ip.address() + " port: 3009"
  );
});
