import { useState } from "react"

const Message = ()=>{
    const [showMessage, setShowMessage] = useState(false)
    const toggleMessage =()=>{
        setShowMessage(!showMessage)
    }
    return(
        <div>
            <h1>Message Component</h1>
            <button onClick={toggleMessage}>
                {showMessage ? 'Ocultar Mensaje': 'Mostrar Mensaje'}
            </button>
            {showMessage && <p>Este es un mensaje</p>}
        </div>
    )
}

export default Message