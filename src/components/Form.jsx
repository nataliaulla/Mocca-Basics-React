import {useState} from "react"

const Form = ({onSubmit}) => {

    
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const manejarElSubmit = (e) => {
        e.preventDefault()
        onSubmit(nombre, telefono, email)
    }

    const manejarCambioNombre = (e) => {
        console.log("Estan escribiendo nombre")
        const input = e.target
        const valor = input.value
        setNombre(valor)
    }

    const manejarCambioTelefono = (e) => {
        console.log("Estan escribiendo telefono")
        const input = e.target
        const valor = input.value
        setTelefono(valor)
    }

    const manejarCambioEmail = (e) => {
        console.log("Estan escribiendo email")
        const input = e.target
        const valor = input.value
        setEmail(valor)
    }


    return (
        <form onSubmit={manejarElSubmit}>

            <div>
                <input id="nombre" onChange={manejarCambioNombre} type="text" placeholder="Nombre"/>
            </div>  

            <div>
                <input id="telefono" onChange={manejarCambioTelefono} type="text" placeholder="Telefono"/>
            </div>  

            <div>
                <input id="email" onChange={manejarCambioEmail} type="text" placeholder="Email"/>
            </div>  

            <button>enviar pedido</button>
             
        </form>
    )
}

export default Form