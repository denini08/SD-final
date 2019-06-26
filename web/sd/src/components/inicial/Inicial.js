import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { meus, deletar } from "../../service/service";
import Erros from "../erros/Erros";
import { Link } from "react-router-dom";

export default class Inicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    meus(sessionStorage.getItem("@UPE:googleId"))
      .then(resp => {
        console.log("resppp", resp);
        this.setState({
          isLoaded: true,
          items: resp.succ
        });
      })
      .catch(err => {
        console.log("erro pega servidor", err);
        this.setState({
          isLoaded: false,
          items: false,
          error: err
        });
      });
  }

  excluirAd = id => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      deletar(id)
        .then(resp => {
          window.location.reload();
        })
        .catch(err => {
          this.setState({
            isLoaded: false,
            items: false,
            error: err
          });
        });
    }
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Erros mensage={error.message} />;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />

          {items.map((item, t) => (
            <div className="container">
              <div className="card">
                <div className="card-header">
                  {item.title}{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.excluirAd(item._id);
                    }}
                  >
                    Excluir
                  </button>
                  <Link className="btn btn-info" to={"/view/" + item._id}>
                    {" "}
                    Visualizar{" "}
                  </Link>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Description
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        value={item.description}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Contact
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        value={item.contact}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Price
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        value={item.price}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Name
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        value={item.createdBy.name}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Email
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        value={item.createdBy.email}
                      />
                    </div>
                  </div>
                  <div className="container">
                    <div className="card">
                      <div className="card-header">Comentarios</div>
                      <div className="card-body">
                        {item.comments.map((cmmt, cont) => (
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label text-md-right"
                              htmlFor={"1_" + t}
                            >
                              {cmmt.autor}
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                readOnly
                                className="form-control-plaintext"
                                id="email"
                                value={cmmt.comment}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Footer />
        </>
      );
    }
  }
}
