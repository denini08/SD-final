import React, { Component } from "react";
import "./header.css";
import logo from "../../static/logo.png";
import Busca from "../busca/Busca";

export default class Header extends Component {
  logout = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <header className="cabecalho bg">
        <a href="/inicial">
          <img src={logo} alt="PDf online" />
        </a>
        <Busca />
        <nav className="navbar navbar-expand-lg">
          <li>
            <a href="/inicial">Home</a>
          </li>
          <li>
            <a href="/inserir">Inserir</a>
          </li>
          <li>
            <a href="/listar">Listar todos</a>
          </li>
          <li>
            {/* <GoogleLogout
              buttonText="Sair"
              clientId={sessionStorage.getItem("@UPE:googleId")}
              onLogoutSuccess={this.logout}
            /> */}
          </li>
        </nav>
      </header>
    );
  }
}
