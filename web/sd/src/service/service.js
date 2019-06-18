import axios from "axios";
const dns = "192.168.0.104";
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
  return new Promise((resolve, reject) => {
    getServidor().then(resp => {
      api
        .get("view/" + id)
        .then(function(resp) {
          console.log(resp);
        })
        .catch(err => {});
    });
  }).catch(err => {
    console.log("erro ao pegar servidor", err);
  });
};

export const insert = Ad => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .post("insert/", {
            Ad: Ad
          })
          .then(function(resp) {
            console.log("FOi", resp);
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
      });
  });
};

export const deletar = id => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .delete("delete/" + id)
          .then(function(resp) {
            console.log(resp);
          })
          .catch(err => {});
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
      });
  });
};

export const insertComment = (id, obj) => {
  return new Promise((resolve, reject) => {
    getServidor().then(resp => {
      api
        .post("comment/" + id, {
          comment: obj
        })
        .then(function(resp) {
          console.log(resp);
        });
    });
  }).catch(err => {
    console.log("erro ao pegar servidor", err);
  });
};

export const meus = idG => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
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
      })
      .catch(err => {});
  });
};

export const findAll = idG => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .get("findAll")
          .then(function(resp) {
            console.log(resp);
          })
          .catch(err => {});
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
      });
  });
};

export const find = b => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .get("find/" + b)
          .then(function(resp) {
            console.log(resp);
          })
          .catch(err => {});
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
      });
  });
};
