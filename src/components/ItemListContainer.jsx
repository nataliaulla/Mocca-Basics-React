import "./estilos.css"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"

const productosIniciales = [
    {id: "1", titulo: "Camisa Milos", precio: 3500, Catalogo: "Mocca", descripcion: "Camisa Denim, tipo oversize", foto: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/enede_verano2122_1627491134.jpg?itok=VZ3e9V-M"}, 
    {id: "2", titulo: "Blusa Santorini Blanca", precio: 3000, Catalogo:"Sale", descripcion: "Blusa lino, asimetrica, nudo central", foto:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/536/681/products/_mg_80641-553ae3a2d345388fa116321554683574-1024-1024.jpg"},
    {id: "3", titulo: "Camisa Naxos", precio: 2800, Catalogo: "Mocca", descripcion: "Camisa poplin, corta", foto: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/536/681/products/sh-foryou-9271-b24ce0c055269fc03316273192088429-1024-1024.jpg"},
    {id: "4", titulo: "Blusa Santorini Maiz", precio: 5500, Catalogo:"Sale", descripcion: "Blusa lino, asimetrica, nudo central", foto: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/536/681/products/_mg_80781-0c8a68240bd3f538b316321554684308-1024-1024.jpg"}
]
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const { id }= useParams()

    
    
    

    useEffect(()=>{
        const mock_async = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },200)
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