
import React, { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"

const itemInicial = [{
        descripcion: "Camisa denim azul, modelo oversize corta",
        precio: 3500,
        PictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eHenCshMXx0MjzSiD2HZQscr8b8gaVdHB1h_3JfdYnRrgWoIGhHFJRkOJjQg9Q9opk8&usqp=CAU",
    }]

    const ItemDetailContainer = () => {
        
        const [items, setItems] = useState([])
        
        useEffect( () => {
            
            const getItem = new Promise((resolve) => {
                setTimeout (()=>{
                    resolve(itemInicial)
            },2000)
            
        })

        getItem
        .then((res)=>{
            setItems(res)
        })
    })

    if(items.length > 0){
        return (
            <>
            <div className="d-flex justify-content-center container mt-3 mb-3">
                {items.map((item, i)=>{
                    return <ItemDetail item={item}/>

                })}
            </div>
            </>
        );
            }else {
        return (
            <>
            <p>Cargando...</p>
            </>
        )
    }
    }
export default  ItemDetailContainer 