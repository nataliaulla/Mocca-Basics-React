import ItemDetailContainer from "./ItemDetailContainer"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {

    const addItem = (cantidad) => {
        console.log(cantidad + "productos agregados al carrito")
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
                            <a className="btn btn-light mt-3" >Finalizar compra!</a>
                    </Link>

                </div>
            </div>
        </div>
         </>
         
      )
 }
 
export default ItemDetail
