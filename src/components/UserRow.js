import React from "react";
import {Link} from 'react-router-dom';

export function UserRow(props){
  return(
    <>
      <td>
      <Link to={"/user/"+props.nome}>{props.nome}</Link>
      </td>
      <td>
        {props.email}
      </td>
      <td>
        {props.idade}
      </td>
      </>
  )

}