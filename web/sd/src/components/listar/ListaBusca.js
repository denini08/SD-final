import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { find } from "../../service/service";
import ListaGenerica from "./ListaGenerica";
import Erros from "../erros/Erros";

export default class ListaBuca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    find(this.props.match.params.b)
      .then(resp => {
        console.log("resp", resp);
        this.setState({
          isLoaded: true,
          items: resp.retorno
        });
      })
      .catch(err => {
        console.log("erro", err);
        this.setState({
          isLoaded: false,
          items: false,
          error: err
        });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <Erros mensage={error.message} />;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header /> <ListaGenerica items={items} /> <Footer />
        </>
      );
    }
  }
}
