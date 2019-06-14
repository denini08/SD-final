import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login.js";
import { isLogado } from "./auth";

const RotaPrivada = ({ component: Componente, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogado() ? (
        <Componente {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} init />
        <RotaPrivada
          path="/inicial"
          exact
          component={() => <h1>inicial</h1>}
          init
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
