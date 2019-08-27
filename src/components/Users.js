import React from "react";
import { UserRow } from "./UserRow";

export class Users extends React.Component {
    
    state = {
        users:[
            {'id':1,
            'nome':'Luiz Mendes',
            'email':'luizmendes@gmail.com',
            'idade':'28'
            },
            {'id':2,
            'nome':'Carla Alvin',
            'email':'carlaalvin@gmail.com',
            'idade':'81'
            },
            {'id':3,
            'nome':'Geovanna Costa',
            'email':'geovannacosta@gmail.com',
            'idade':'31'
            }
        ]
    }
    render() {
        
      return (
          
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Idade</td>
                    <td>Ação</td>
                </tr>
            </thead>
            <tbody>
                {
                this.state.users.map(user =>(
                    <UserRow id={user.id} nome={user.nome} email={user.email} idade={user.idade}/>
                ))
                }
        </tbody>
        </table>
      );
    }
  }