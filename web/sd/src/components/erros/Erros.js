import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default class Erros extends Component {
  render() {
    if (this.props.isNotFound) {
      return (
        <>
          <Header />
          <div className="alert alert-danger">
            <b>{this.props.mensage}</b>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />

          <div className="alert alert-danger">
            <b>{this.props.mensage}</b>
            <br />
            Ops algo deu errado: parece que o servidor API caiu :( <br />.
            <label>Reicicie a pagina</label>
          </div>
          <Footer />
        </>
      );
    }
  }
}
