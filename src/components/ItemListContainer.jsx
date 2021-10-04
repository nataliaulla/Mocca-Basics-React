import "./estilos.css"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"

const productosIniciales = [
    {id: "1", titulo: "Camisa Mykonos", precio: 3500, Catalogo: "Mocca"}, 
    {id: "2", titulo: "Blusa Santorini", precio: 3000, Catalogo:"Sale"},
    {id: "3", titulo: "Camisa Rodas", precio: 2800, Catalogo: "Mocca"},
    {id: "4", titulo: "Sobrecamisa Milos", precio: 5500, Catalogo:"Sale"}
]
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const { id }= useParams()

    
    
    

    useEffect(()=>{
        const mock_async = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },2000)
        })

        if(id){
            mock_async.then(data=>{
                setProductos(data.filter(item=>item.Catalogo===id))
            })
        }else{
            mock_async
            .then((resultado)=>{
                setProductos(resultado)
    
            })  
        }

       
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