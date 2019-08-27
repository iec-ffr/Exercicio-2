import React from "react";
import {Link} from 'react-router-dom';

export class Nav extends React.Component {
    
        

    render() {
      return (
        <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/users">Usuários</Link>
          </li>
        </ul>
      
        </div>
      );
    }
  }