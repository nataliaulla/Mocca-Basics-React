import "./estilos.css"
import {useEffect, useState} from "react"

const miItem = [
    {id: 1, detalle: "Camisa de jean, modelo oversize ", precio: 3500, img: src="https://enede.com.ar/shop/16035-large_default/camisa-yello.jpg"}
]

const ItemDetailContainer = () => {
    const [miItem,setProductos] = useState([])
    
    

    useEffect(()=>{
        const mock_async = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(miItem)
            },2000)
        })

        mock_async
        .then((resultado)=>{
            setProductos(resultado)

        })
    })

    if(miItem.length > 0){
        
    return (
       <> 
        <ItemDetail miItem={miItem} />
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

export default ItemDetailContainer