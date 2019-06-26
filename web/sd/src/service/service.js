import axios from "axios";
const dns = "192.168.0.103";
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
        console.log("error", error);
        reject(error);
        // window.location.reload();
      });
  });
};

export const view = id => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .get("view/" + id)
          .then(function(respo) {
            resolve({ respo: respo.data, status: respo.status });
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject(err);
      });
  });
};

export const insert = Ad => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        let createdBy = {
          name: sessionStorage.getItem("@UPE:name"),
          id: sessionStorage.getItem("@UPE:googleId"),
          email: sessionStorage.getItem("@UPE:email")
        };
        Ad.createdBy = createdBy;
        console.log("obj", { Ad: Ad });
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
        reject(err);
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
            resolve(resp);
            //console.log(resp);
          })
          .catch(err => {});
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject(err);
      });
  });
};

export const insertComment = (id, obj) => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .post("comment/" + id, {
            comment: obj
          })
          .then(function(resp) {
            resolve(resp);
            //console.log(resp);
          });
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject(err);
      });
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
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject("erro ao pegar servidor", err);
      });
  });
};

export const findAll = () => {
  return new Promise((resolve, reject) => {
    getServidor()
      .then(resp => {
        api
          .get("findAll")
          .then(function(respo) {
            // console.log(resp);
            resolve(respo.data);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject("erro ao pegar servidor", err);
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
            resolve(resp.data);
            console.log(resp);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        console.log("erro ao pegar servidor", err);
        reject(err);
      });
  });
};
