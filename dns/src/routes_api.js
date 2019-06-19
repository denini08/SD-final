const express = require("express");
const routes = express.Router();
const Dns_ = require("../model/Dns");

class RoutesApi {
  constructor() {
    this.initRoutes();
    this.routes = routes;
    this.Dns = new Dns_();
  }

  mdd(req, res, next) {
    if (req.clientIp.substr(0, 7) == "::ffff:") {
      req.clientIpNovo = req.clientIp.substr(7);
    }
    next();
  }

  initRoutes() {
    routes.get("/keepAlive/:port", this.mdd, (req, res) => {
      console.log("TA VIVO: ", req.clientIpNovo);
      let port = req.params.port;
      console.log("port", port);
      this.Dns.addServidor(req.clientIpNovo, port);
      res.status(200).json({ ok: "ok" });
    });

    routes.get("/remove", this.mdd, (req, res) => {
      this.Dns.removerServidor(req.clientIpNovo);
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
  }
}

module.exports = RoutesApi;
