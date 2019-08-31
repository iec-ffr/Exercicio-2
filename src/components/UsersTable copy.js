import React,{useState} from "react";
import { UserRow } from "./UserRow";
import { Buscar } from "./Buscar";


export function UsersTable(props){

    const [user,setUser] = useState([
        {
            id:1,
            nome:"Pedro Luiz",
            email:"pedro@gmail.com",
            idade:20,
        },
        {
            id:2,
            nome:" Maria Augusto",
            email:"maria@gmail.com",
            idade:21,
        },
        {
            id:3,
            nome:"João Mendes",
            email:"joãomendes@gmail.com",
            idade:22,
        }
    ])

    
    return(
        <div>
            <Buscar />
            <table border='1'>
                <thead>
                    <tr>
                        <td>
                            Nome
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Idade
                        </td>
                        <td>
                            Ação
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(user=>
                            <UserRow key={user.id} id={user.id} nome={user.nome} email={user.email} idade={user.idade}/>
                        )
                    }
                </tbody>
                
            </table>
        </div>
        
    )

}
