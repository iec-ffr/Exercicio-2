import React from "react";


export class User extends React.Component {
    
    constructor(props){
        super(props);
    }

  

    render() {
      return (
       <h1>Olá! {this.props.match.params.nome}</h1>
      );
    }

  }