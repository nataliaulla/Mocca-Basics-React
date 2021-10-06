import ItemDetailContainer from "./ItemDetailContainer"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../context/CartContext"

const ItemDetail = ({producto}) => {

    const {setCarrito} = useContext(CartContext);
    const addItem = (cantidad) => {
        const productoQuantity = {...producto, cantidad};
        setCarrito(prev => {
            return [...prev, productoQuantity];
        })
    }


    return (
        <>
        <div>
            <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                <div className="card-body">
                     <img className="foto" src={producto.foto}></img>
                     <p className="card-text">{producto.titulo}</p>
                     <p className="card-text">{producto.descripcion}</p>
                     <p className="card-text">${producto.precio}</p>
                     <ItemCount onAdd={addItem} />
                     <Link to= "/cart">
                            <a className="btn btn-light mt-3" >Ver Carrito!</a>
                    </Link>

                </div>
            </div>
        </div>
         </>
         
      )
 }
 
export default ItemDetail
