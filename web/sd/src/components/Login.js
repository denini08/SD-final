import React, { Component } from "react";
import GoogleLogin from "react-google-login";

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
    console.log("erro", e);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="101728964807-ekr8vpcfj97fpr6scefch4ed2mu9cuo5.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogleOk}
          onFailure={this.responseGoogleErro}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
