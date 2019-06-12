const express = require("express");
const routes = express.Router();

class RoutesApi {
  constructor() {
    this.initRoutes();
    this.routes = routes;
  }

  initRoutes() {
    routes.post("/imagem", (req, res) => {
      //console.log(req.files.foo); // the uploaded file object
      let nome = req.body.nome;
      let caminho = "./img/" + nome;
      req.files.img.mv(caminho, err => {
        if (err) {
          console.log(err);
          res.status(400).json({ err: err });
        } else {
          res.status(201);
        }
      });
    });
  }
}

module.exports = RoutesApi;
