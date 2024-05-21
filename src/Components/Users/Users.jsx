import { useState, useEffect } from "react"
function Users(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try {
                const response =  await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
               console.log("Error:",error) 
            }
        }

        fetchUsers()
    
    },[])

    return(<div>
        <h1>Lista de Usuarios</h1>
        <ul>
            {
                users.map(element =>(
                    <li>{element.name}</li>
                ))
            }
        </ul>


    </div>)
}

export default Users