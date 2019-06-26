const request = require("request-promise");

class Dns {
  constructor() {
    this.servidores = [];
    this.imagem;
  }

  addServidor(ip, port, nome) {
    console.log("nome", nome);
    let ret = this.servidores.find(serv => {
      return serv.ip === ip && serv.port === port;
    });

    if (ret !== undefined) {
      ret.data = new Date();
    } else {
      this.servidores.push({
        ip: ip,
        port: port,
        data: new Date(),
        nome: nome
      });
    }
    this.printServiroes();
  }

  removerServidor(ip) {
    for (let i = 0; i < this.servidores.length; i++) {
      if (servidores[i].ip === ip) {
        console.log(
          "******////////ATENCAOOO API MORREU:",
          this.servidores[i].nome
        );
        servidores.splice(i, 1);
        return;
      }
    }
  }

  isAlive() {
    return new Promise((resolve, reject) => {
      if (this.servidores.length === 0) resolve("nada");
      let serivorEscolhido = this.servidores.shift();
      console.log("servidor escolhido: ", serivorEscolhido, "\n");
      let s =
        "http://" +
        serivorEscolhido.ip +
        ":" +
        serivorEscolhido.port +
        "/api/isAlive";
      request({ uri: s, json: true })
        .then(resposta => {
          console.log("res", resposta, typeof resposta);
          if (resposta.status == "ok") {
            console.log("Servidor está vivo e foi enviado ");
            console.log("----------------------------");
            resolve(serivorEscolhido);
          } else {
            resolve(this.isAlive());
          }
        })
        .catch(err => {
          console.log("AAAAAA Servidor está morto");
          resolve(this.isAlive());
        });
    });
  }

  getServidor() {
    return new Promise((resolve, reject) => {
      //calculando para ver se algum servidor morreu
      for (let i = 0; i < this.servidores.length; i++) {
        let diff = Math.abs(new Date() - this.servidores[i].data);
        let minutos = diff / 1000 / 60; //ms segundos

        console.log("diferenca", minutos);
        if (minutos > 0.5) {
          console.log(
            "\x1b[31m",
            "******////////ATENCAOOO API MORREU:",
            this.servidores[i].nome
          );
          this.servidores.splice(i, 1);
          i--;
        }
      }

      if (this.servidores.length === 0) {
        reject("Nenhuma api conectada");
      }

      this.isAlive()
        .then(res => {
          if (typeof res === "string") {
            reject(res);
          }
          let obj = {
            ipServidor: res
          };
          res.data = new Date();
          this.servidores.push(res);
          this.printServiroes();
          resolve(obj);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  printServiroes() {
    let nomes = [];

    this.servidores.forEach(servidor => {
      nomes.push(servidor.nome);
    });

    console.log(
      "\x1b[36m",
      "------------",
      "servidores conectados: ",
      "[",
      nomes.length,
      "]",
      nomes,
      "------------"
    );
  }
}

module.exports = Dns;
