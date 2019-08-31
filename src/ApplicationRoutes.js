import React from "react";
import { Route } from "react-router-dom";
import { Inicio, UsersTable,User } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Inicio} />
    <Route path="/users/" component={UsersTable} />
    <Route exact path="/user/:nome" component={User} />
    <Route exact path="/user/:id/remover" component={User} />
  </>
);
