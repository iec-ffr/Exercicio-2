import React from "react";
import { Route } from "react-router-dom";
import { Inicio, Users, User, DeleteUser } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Inicio} />
    <Route path="/users/" component={Users} />
    <Route exact path="/user/:nome" component={User} />
    <Route exact path="/user/:id/remover" component={DeleteUser} />
  </>
);
