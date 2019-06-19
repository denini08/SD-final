class Dns {
  constructor() {
    this.servidores = [];
    this.imagem;
  }

  addServidor(ip, port) {
    let ret = this.servidores.find(serv => {
      return serv.ip === ip && serv.port === port;
    });

    if (ret !== undefined) {
      ret.data = new Date();
    } else {
      this.servidores.push({
        ip: ip,
        port: port,
        data: new Date()
      });
    }
    console.log(
      "\nservidores conectados: ",
      "[",
      this.servidores.length,
      "]",
      this.servidores,
      "\n\n\n"
    );
  }

  removerServidor(ip) {
    for (let i = 0; i < this.servidores.length; i++) {
      if (servidores[i].ip === ip) {
        servidores.splice(i, 1);
        return;
      }
    }
  }

  getServidor() {
    return new Promise((resolve, reject) => {
      //calculando para ver se algum servidor morreu
      for (let i = 0; i < this.servidores.length; i++) {
        let diff = Math.abs(new Date() - this.servidores[i].data);
        let minutos = diff / 1000 / 60; //ms segundos

        console.log("diferenca", minutos);
        if (minutos > 0.5) {
          this.servidores.splice(i, 1);
          i--;
          console.log(
            "******////////ATENCAOOO API MORREU:",
            this.servidores[i]
          );
        }
      }

      if (this.servidores.length === 0) {
        reject("nenhum servidor conectado");
      }

      let serivorEscolhido = this.servidores.shift();
      console.log("servidor escolhido: ", serivorEscolhido, "\n\n");
      this.servidores.push(serivorEscolhido);
      console.log(
        "servidores conectados: [",
        this.servidores.length,
        "]",
        this.servidores,
        "\n\n"
      );

      let obj = {
        ipServidor: serivorEscolhido
      };
      resolve(obj);
    });
  }
}

module.exports = Dns;
