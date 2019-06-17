const express = require("express");
const routes = express.Router();
const Dns_ = require("../model/Dns");

class RoutesApi {
  constructor() {
    this.initRoutes();
    this.routes = routes;
    this.Dns = new Dns_();
  }

  initRoutes() {
    routes.get("/keepAlive", (req, res) => {
      console.log("TA VIVO: ", req.clientIp);
      this.Dns.addServidor(req.clientIp);
      res.status(201).json({ ok: "ok" });
    });

    routes.get("/remove", (req, res) => {
      this.Dns.removerServidor(req.clientIp);
      res.status(200);
    });

    routes.get("/getServidor", (req, res) => {
      this.Dns.getServidor()
        .then(resp => {
          console.log("servidor escolhido", resp);
          res.status(200).json(resp);
        })
        .catch(err => {
          console.log("servidor erro", err);
          res.status(500).json(err);
        });
    });

    routes.get("/getServidorImagem", (req, res) => {
      this.Dns.getServidorImagem()
        .then(resp => {
          res.status(200).json(resp);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    });

    routes.get("/addServidorImagem", (req, res) => {
      console.log("servidor imagem: ", req.clientIp);
      this.Dns.setServidorImagem(req.clientIp);
      res.status(201).json({ ok: "ok" });
    });
  }
}

module.exports = RoutesApi;
