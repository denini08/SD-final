import React, { Component } from "react";
import { insertComment } from "../../service/service";

export default class InserirComentario extends Component {
  state = {
    id: this.props.id,
    model: {
      autor: sessionStorage.getItem("@UPE:name"),
      comment: ""
    }
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  salvar = e => {
    if (this.state.model.comment === "") return;
    insertComment(this.state.id, this.state.model).then(resp => {
      window.location.reload();
    });
  };
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="form-group row">
              <label
                htmlFor="cmt"
                className="col-md-4 col-form-label text-md-right"
              >
                Inserir comentário
              </label>

              <div className="col-md-6">
                <input
                  id="cmt"
                  type="text"
                  className="form-control"
                  required
                  onChange={e => this.setValues(e, "comment")}
                />
              </div>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  this.salvar();
                }}
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
