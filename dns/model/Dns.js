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
        let diff = Math.abs(new Date() - this.servidores.data);
        let minutos = diff / 1000 / 60; //ms segundos

        if (minutos > 1) {
          servidores.splice(i, 1);
          i--;
        }
      }

      let serivorEscolhido = this.servidores.shift();
      this.servidores.push(serivorEscolhido);
      let obj = {
        ipServidor: serivorEscolhido
      };
      resolve(obj);
    });
  }
}

module.exports = Dns;
