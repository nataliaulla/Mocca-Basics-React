import "./estilos.css"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { firestore } from "../firebase"




const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const { id }= useParams()

    
useEffect(()=>{

        const db = firestore
        const ItemCollection = db.collection("productos")
        
        if(id == "Mocca"){
            ItemCollection
            .where("Catalogo", "==", id)
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(data)
                setProductos(data)
            })
        .catch(err => console.log(err))

        }else if(id == "Sale"){
            ItemCollection
            .where("Catalogo", "==", id)
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()

                }));
                setProductos(data)
            })
            .catch(err => console.log(err))
        
        }else{
            ItemCollection
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(data)
            })
            .catch(err => console.log(err))

        }
    },[id])

      
      

    if(productos.length > 0){
        
    return (
       <> 
        
        <ItemList productos={productos} />
    </>
     )
    }
    else{
       return(
            <>
            <p>Cargando...</p>
            </>
        )
    }}


export default ItemListContainer