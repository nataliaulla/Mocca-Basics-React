import "./estilos.css"
import {useEffect, useState} from "react"
import ItemList from "./ItemList";

const productosIniciales = [
    {titulo: "Prod 1", precio: 2500}, 
    {titulo: "Prod 2", precio: 3000}
]
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    

    useEffect(()=>{
        const mock_async = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },2000)
        })

        mock_async
        .then((resultado)=>{
            setProductos(resultado)

        })
    })

    if(productos.length > 0){
        
    return (
       <> 
        <ItemList productos={productos} />
    </>
     )
    }else{
        return(
            <>
            <p>Cargando...</p>
            </>
        )
    }
}

export default ItemListContainer