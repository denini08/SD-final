import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./login.css";
import { Container, Row } from "reactstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header.js";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    googleId: "",
    name: "",
    email: ""
  };

  responseGoogleOk = e => {
    console.log(e);
    const { googleId, name, email } = e.profileObj;
    this.setState({
      googleId: googleId,
      name: name,
      email: email
    });

    localStorage.setItem("@UPE:googleId", googleId);
    localStorage.setItem("@UPE:name", name);
    localStorage.setItem("@UPE:email", email);
  };

  responseGoogleErro = e => {
    console.log("erro", e.error);
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="login-container">
          <Row>
            <div className="col-md-6 login-form-1">
              <h1>É necessario fazer login:</h1>
              <GoogleLogin
                clientId="101728964807-ekr8vpcfj97fpr6scefch4ed2mu9cuo5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogleOk}
                onFailure={this.responseGoogleErro}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
