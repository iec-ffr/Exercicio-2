import React from "react";

export class DeleteUser extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
      return (
       <h1>ID: {this.props.match.params.id} Deletado</h1>
      );
    }

  }