import React from "react";

export const User = (props) => <h1>Olá {

  props.match.params.nome ? props.match.params.nome : ""
  +
  props.match.params.id ? props.match.params.id:""

}</h1>