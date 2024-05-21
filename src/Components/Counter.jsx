import { useState } from "react";

function Counter(){
    const [contador, setContador] = useState(0)

    const aumentar = ()=>{
        setContador(contador +1)
    }

    const  reducir = () =>{
        setContador(contador  -1 )
    } 

    return(
        <div>
            <h1>COUNTER</h1>
            <h2>{contador}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={reducir}>Reducir</button>
        </div>
    )
    
}

export default Counter