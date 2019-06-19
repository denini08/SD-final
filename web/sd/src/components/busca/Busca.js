import React, { Component } from "react";

export default class Busca extends Component {
  state = {
    id: this.props.id,
    model: {
      b: ""
    }
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  buscar = () => {
    if (this.state.model.b === "") return;
    window.location = "/find/" + this.state.model.b;
  };
  render() {
    return (
      <>
        <input placeholder="Buscar" onChange={e => this.setValues(e, "b")} />
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            this.buscar();
          }}
        >
          Busca
        </button>
      </>
    );
  }
}
