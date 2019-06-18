import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login.js";
import { isLogado } from "./auth";
import Inicial from "./components/inicial/Inicial";
import Inserir from "./components/inserir/Inserir";

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
        <RotaPrivada path="/inicial" exact component={Inicial} init />
        <RotaPrivada path="/inserir" exact component={Inserir} />
        <RotaPrivada path="/listar" exact component={Inicial} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
