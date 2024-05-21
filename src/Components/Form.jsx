import { useState } from "react";

const Form = ()=>{
    const [inputValue, setInputValue] = useState('')
    const [inputLastname,  setInputLastName] = useState('')

    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }

    const handleChangeLastname =(event)=>{
        setInputLastName(event.target.value)
    }

    console.log("El valor del input es:"+inputValue)
    console.log("El valor del apellido es:"+inputLastname)

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('El nombre completo es:'+ inputValue+" "+inputLastname)
    }

    return (<div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                type="text"
                value={inputLastname}
                onChange={handleChangeLastname}
                placeholder="Lastname"
            />

            <button type="submit">Enviar</button>
        </form>

    </div>)
    
}

export default Form

