import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { meus, getServidor, excluirAd } from "../../service/service";

export default class Listar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <>OI</>;
    }
  }
}
