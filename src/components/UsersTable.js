import React,{useState} from "react";
import { UserRow } from "./UserRow";


export function UsersTable(props){
    let __usersDefalt =  [{
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
    }]
    const [user,setUser] = useState(__usersDefalt)

    function handleChange(key){  
        let item = []
        if(key){               
            __usersDefalt.map(function(u){
                if(Math.sign(u.nome.indexOf(key))>=0){
                    item.push(u);
                }
            })
        }else{
            item = __usersDefalt
        }
        setUser([...item]);
    }

    function addTeste() {
        let item = {
            id:2,
            nome:"a Luiz",
            email:"pedro@gmail.com",
            idade:20,
        }
        setUser([...user,item]);
    }

    function remover(id) {
        let item = []
        
        user.map(function(u){
            if(u.id != id){
                item.push(u);
            }  
            
        })
        setUser([...item]);
    }
    
    return(
        <div>

        <form>
            <input type="text" onChange={(event)=>handleChange(event.target.value)}/>
        </form>
            
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
                        <tr key={user.id}>
                            <UserRow key={user.id} id={user.id} nome={user.nome} email={user.email} idade={user.idade}/>                        
                            <td>
                                <button onClick={()=>remover(user.id)}>X</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
                
            </table>
            <button onClick={addTeste}>ADD</button>
        </div>
        
    )

}
