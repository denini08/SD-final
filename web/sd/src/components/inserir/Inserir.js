import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { insert } from "../../service/service";

export default class Inserir extends Component {
  state = {
    model: {
      title: "",
      description: "",
      price: "",
      contact: ""
    }
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  salvar = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    insert(this.state.model)
      .then(res => {
        alert("salvo com sucesso");
        window.location.href = "view/" + res.data._id;
      })
      .catch(err => {
        this.setState({
          isLoaded: false,
          items: false,
          error: err
        });
      });
  };

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="alert alert-danger">
          Ops algo deu errado: Parece que o servidor API caiu :( <br />.
          {console.log(error.message)}
          <br />
          <label>Reicicie a pagina</label>
        </div>
      );
    } else {
      return (
        <>
          <Header />
          <div className="card">
            <div className="card-header">Novo Anúncio</div>
            <form onSubmit={this.salvar}>
              <div className="card-body">
                <div className="form-group row">
                  <label
                    htmlFor="titulo"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Título
                  </label>

                  <div className="col-md-6">
                    <input
                      id="titulo"
                      type="text"
                      className="form-control"
                      required
                      autoFocus
                      onChange={e => this.setValues(e, "title")}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="desc"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Descrição
                  </label>

                  <div className="col-md-6">
                    <input
                      id="desc"
                      type="text"
                      className="form-control"
                      required
                      onChange={e => this.setValues(e, "description")}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="desc"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Contato
                  </label>

                  <div className="col-md-6">
                    <input
                      id="phone"
                      type="phone"
                      className="form-control"
                      name="phone"
                      placeholder="(81)999-999-999"
                      required
                      onChange={e => this.setValues(e, "contact")}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="price"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Preço
                  </label>

                  <div className="col-md-6">
                    <input
                      id="price"
                      type="number"
                      className="form-control"
                      required
                      onChange={e => this.setValues(e, "price")}
                    />
                  </div>
                  <button className="btn btn-success"> Enviar</button>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </>
      );
    }
  }
}
