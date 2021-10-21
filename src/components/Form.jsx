import {useState} from "react"

const Form = ({onSubmit}) => {

    //useReducer => Redux
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const manejarElSubmit = (e) => {
        e.preventDefault()
        //console.log(nombre, telefono, email)
        //validar campos
        //enviar a la base de datos
        onSubmit(nombre, telefono, email)
    }

    const manejarCambioNombre = (e) => {
        console.log("Estan escribiendo nombre")
        //agarro el valor del input que tiene el callback
        //const input = document.getElementById("nombre")
        const input = e.target
        const valor = input.value
        setNombre(valor)
    }

    const manejarCambioTelefono = (e) => {
        console.log("Estan escribiendo telefono")
        //agarro el valor del input que tiene el callback
        //const input = document.getElementById("telefono")
        const input = e.target
        const valor = input.value
        setTelefono(valor)
    }

    const manejarCambioEmail = (e) => {
        console.log("Estan escribiendo email")
        //const input = document.getElementById("email")
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