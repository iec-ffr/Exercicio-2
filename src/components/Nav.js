import React from "react";
import {Link} from 'react-router-dom';

export function Nav(props){
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
