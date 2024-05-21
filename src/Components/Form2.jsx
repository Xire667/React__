import { useState } from "react";

const Form2 = ()=>{
    // Creamos un estado  que es un objeto que tiene dos claves(name y lastname)
    const [formData, setFormData] =useState({
        firstName:"",
        lastName: ""
    })

    const handleChange = (event)=>{
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();//
        alert(formData.firstName +" "+ formData.lastName);
    }
    return(
        <div>
            <h1>Form2</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="firstName"
                placeholder="Name"
                value={formData.firstName}
                onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>


            </form>

        </div>
    )
}

export default Form2