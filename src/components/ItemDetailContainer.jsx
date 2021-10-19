
import React, { useEffect , useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList"
import ItemListContainer from "./ItemListContainer"
import { firestore } from "../firebase"


    const ItemDetailContainer = () => {
        
        const [producto,setProducto] = useState([])
        const { id }= useParams() 
        const [ loading, setLoading] = useState(true);
       
        
        useEffect( () => {

           
                const db = firestore;
            
                    const itemCollection = db.collection('productos');
                    const product = itemCollection.doc(id);
            
                    product.get().then((doc)=>{
                        if(doc.data() === undefined){
                            setLoading(false);
                            
                        } else{
                            
                            setProducto({ id: doc.id, ...doc.data() });
                        }
                    });
            
                }, [id]);
                

        
        return (

            <>
            <ItemDetail producto={producto} />

            </>
        );
        }

       
    
export default  ItemDetailContainer 