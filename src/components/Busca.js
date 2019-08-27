import React from "react";
import { Users } from "./Users";

export class Busca extends React.Component {
  
  

  trocar(event) {
  }

  render() {
    return (
        <form>
          <input type="text"  placeholder="buscar" onChange={this.trocar}/>
        </form>
    );
  }
}