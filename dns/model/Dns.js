class Dns {
  constructor() {
    this.servidores = [];
  }

  addServidor(ip) {
    let ret = this.servidores.find(serv => {
      return serv.ip === ip;
    });

    if (ret !== undefined) {
      ret.data = new Date();
    } else {
      this.servidores.push({
        ip: ip,
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
      //calculando para ver se morreu
      for (let i = 0; i < this.servidores.length; i++) {
        let diff = Math.abs(new Date() - this.servidores.data);
        let minutos = diff / 1000 / 60; //ms segundos

        if (minutos > 1) {
          servidores.splice(i, 1);
          i--;
        }
      }

      let obj = {
        ipServidor: this.servidores[0],
        ipImagens: this.servidores[1]
      };
      resolve(obj);
    });
  }
}

module.exports = Dns;