
import React, { useEffect , useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList"
import ItemListContainer from "./ItemListContainer"

const productosIniciales = [
    {id: "1", titulo: "Camisa Mykonos", precio: 3500, Catalogo: "Mocca", descripcion: "Camisa Denim corta, tipo oversize"}, 
    {id: "2", titulo: "Blusa Santorini", precio: 3000, Catalogo:"Sale", descripcion: "Blusa lino, asimetrica, nudo central"},
    {id: "3", titulo: "Camisa Rodas", precio: 2800, Catalogo: "Mocca", descripcion: "Camisa poplin, corta"},
    {id: "4", titulo: "Sobrecamisa Milos", precio: 5500, Catalogo:"Sale", descripcion: "Sobrecamisa eco-cuero, oversize"}
]


    const ItemDetailContainer = () => {
        
        const [producto,setProducto] = useState([])
        const { id }= useParams() 
        
        useEffect( () => {
            
            const mock_async = new Promise((resolver) => {
                setTimeout (()=>{
                    resolver(productosIniciales)
            },2000)
            
        })
       
            mock_async
            .then(productos => {
                const producto = productos.find(producto => producto.id ===id);
                setProducto(producto);

            })
                

        })
        return (

            <>
            <ItemDetail producto={producto} />

            </>
        );
        }

       
    





           
export default  ItemDetailContainer 