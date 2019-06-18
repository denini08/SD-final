import axios from "axios";
const dns = "192.168.0.101";
const dnsHttp = "http://" + dns + ":3030";
let api;

export const getServidor = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(dnsHttp + "/getServidor")
      .then(function(resp) {
        console.log(resp);
        let ip_api = resp.data.ipServidor.ip;
        let port_api = resp.data.ipServidor.port;
        let url = "http://" + ip_api + ":" + port_api + "/api/";
        console.log("url", url);
        api = axios.create({
          baseURL: url,
          timeout: 1000
        });
        console.log(resp);
        resolve(resp);
      })
      .catch(function(error) {
        console.log(error);
        getServidor();
      });
  });
};

export const view = id => {
  api
    .get("view/" + id)
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};

export const insert = Ad => {
  api
    .post("insert/", {
      Ad: Ad
    })
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};

export const deletar = id => {
  api
    .delete("delete/" + id)
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};

export const insertComment = (id, obj) => {
  api
    .post("comment/" + id, {
      comment: obj
    })
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};

export const meus = idG => {
  return new Promise((resolve, reject) => {
    api
      .get("meus/" + idG)
      .then(function(resp) {
        console.log(resp.data);
        resolve(resp.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const findAll = idG => {
  api
    .get("findAll")
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};

export const find = b => {
  api
    .get("find/" + b)
    .then(function(resp) {
      console.log(resp);
    })
    .catch(err => {});
};
