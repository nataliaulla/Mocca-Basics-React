import ItemDetailContainer from "./ItemDetailContainer"

const ItemDetail = ({producto}) => {
    return (
        <>
        <div>
             <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                     
                     <div className="card-body">
                         <p className="card-text">{producto.titulo}</p>
                         <p className="card-text">{producto.descripcion}</p>
                         <p className="card-text">${producto.precio}</p>
                         
                         
                         </div>
                     </div>
             </div>
         </>
         
      )
 }
 
export default ItemDetail
