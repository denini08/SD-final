import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="https://upecaruaru.com.br"> UPE Caruaru </a>
        </div>
      </footer>
    );
  }
}
