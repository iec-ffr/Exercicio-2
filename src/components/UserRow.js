import React from "react";
import {Link} from 'react-router-dom';

export class UserRow extends React.Component {

  
   render() {
      return (
        <tr key={this.props.id} >
          <td>          
          <Link to={`/user/${this.props.nome}`}>          
            {this.props.nome}
          </Link>
          </td>
          <td>{this.props.email}</td>
          <td>{this.props.idade}</td>
          <td><Link to={`/user/${this.props.id}/remover/`}><button>Remover</button></Link></td>
        </tr>
      );
    }

  }