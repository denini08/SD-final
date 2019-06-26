const express = require("express");
const routes = express.Router();

const AdC = require("./controllers/AdController");

class RoutesApi {
  constructor() {
    this.initRoutes();
    this.routes = routes;
    this.AdController = new AdC();
  }

  initRoutes() {
    routes.get("/findAll", (req, res) => {
      this.AdController.listAds()
        .then(Ads => {
          res.status(200).json(Ads);
        })
        .catch(err => {
          res.json(err);
        });
    });

    routes.get("/find/:b", (req, res) => {
      this.AdController.find(req.params.b)
        .then(result => {
          res.status(200).json({ retorno: result, string: req.params.b });
        })
        .catch(err => {
          console.log("erro1213123", err);
          res.status(500).json(err);
        });
    });

    routes.get("/view/:id", (req, res) => {
      this.AdController.getAd(req.params.id)
        .then(Ad => {
          res.status(200).json(Ad);
        })
        .catch(err => {
          console.log("erro3", err);
          res.status(404).json(err);
        });
    });

    routes.post("/insert", (req, res) => {
      this.AdController.insertAd(req.body.Ad)
        .then(Ad => {
          res.status(201).json(Ad);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    });

    routes.delete("/delete/:id", (req, res) => {
      this.AdController.deleteAd(req.params.id)
        .then(succ => {
          res.status(200).json({ status: "deleted" });
        })
        .catch(err => {
          res.json(err);
        });
    });

    routes.post("/comment/:id", (req, res) => {
      this.AdController.addComment(req.params.id, req.body.comment)
        .then(succ => {
          res.status(201).json({ succ });
        })
        .catch(err => {
          res.json(err);
        });
    });

    routes.get("/meus/:id", (req, res) => {
      this.AdController.buscarMeus(req.params.id)
        .then(succ => {
          res.status(200).json({ succ });
        })
        .catch(err => {
          console.log("EROOWW", err);
          res.json(err);
        });
    });

    routes.get("/isAlive", (req, res) => {
      res.status(200).json({ status: "ok" });
    });
  }
}

module.exports = RoutesApi;
