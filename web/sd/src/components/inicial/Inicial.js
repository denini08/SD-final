import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { meus, getServidor } from "../../service/service";

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
    getServidor().then(resp => {
      meus(sessionStorage.getItem("@UPE:googleId")).then(resp => {
        console.log("resppp", resp);
        this.setState({
          isLoaded: true,
          items: resp.succ
        });
      });
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />

          {items.map((item, t) => (
            <div className="container">
              <div className="card">
                <div className="card-header">{item.title}</div>
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      className="col-md-4 col-form-label text-md-right"
                      htmlFor={"1_" + t}
                    >
                      Descricao
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
