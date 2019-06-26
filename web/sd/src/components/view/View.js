import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { view } from "../../service/service";
import InserirComentario from "../inserirComentario/InserirComentario";
import Erros from "../erros/Erros";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: undefined
    };
  }

  componentDidMount() {
    view(this.props.match.params.id)
      .then(resp => {
        console.log("1", resp);
        if (resp.respo.status == 404) {
          alert("entrouss");
          this.setState({
            error: "404",
            isNotFound: true
          });
        } else {
          this.setState({
            isLoaded: true,
            item: resp.respo
          });
        }
      })
      .catch(err => {
        console.log("err", err);
        this.setState({
          error: err,
          isLoaded: true
        });
      });
  }
  render() {
    const { error, isLoaded, item, isNotFound } = this.state;

    if (error) {
      return <Erros mensage={error.message} isNotFound={isNotFound} />;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />
          <div className="container">
            <div className="card">
              <div className="card-header">{item.title} </div>
              <div className="card-body">
                <div className="form-group row">
                  <label className="col-md-4 col-form-label text-md-right">
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
                  <label className="col-md-4 col-form-label text-md-right">
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
                  <label className="col-md-4 col-form-label text-md-right">
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
                  <label className="col-md-4 col-form-label text-md-right">
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
                  <label className="col-md-4 col-form-label text-md-right">
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
                  <InserirComentario id={this.props.match.params.id} />

                  <div className="card">
                    <div className="card-header">Comentarios</div>
                    <div className="card-body">
                      {item.comments.map((cmmt, cont) => (
                        <div className="form-group row">
                          <label className="col-md-4 col-form-label text-md-right">
                            {cmmt.autor + " :"}
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
          <Footer />
        </>
      );
    }
  }
}
