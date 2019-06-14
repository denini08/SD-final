import React, { Component } from "react";
import "./header.css";
import logo from "../../static/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header className="cabecalho bg">
        <a href="/api/home">
          <img src={logo} alt="PDf online" />
        </a>
        <nav className="navbar navbar-expand-lg">
          <li>
            <a href="/api/index">Home</a>
          </li>
          <li>
            <a href="/api/inserir">Inserir</a>
          </li>
          <li>
            <a className="dropdown-item" href="/api/logout">
              Sair
            </a>
          </li>
        </nav>
      </header>
    );
  }
}
