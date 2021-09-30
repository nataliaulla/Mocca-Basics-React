import "./estilos.css"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"

const productosIniciales = [
    {titulo: "Camisa Mykonos", precio: 3500}, 
    {titulo: "Blusa Santorini", precio: 3000},
    {titulo: "Camisa Rodas", precio: 2800},
    {titulo: "Sobrecamisa Milos", precio: 5500}
]
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const parametros = useParams()

    console.log (parametros)
    
    

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