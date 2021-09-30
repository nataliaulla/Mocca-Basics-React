
const ItemDetail = ({item}) => {
    return (
        <>
        <div>
             <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                     <img src={item.PictureUrl}></img>
                     <div className="card-body">
                         <p className="card-text">{item.descripcion}</p>
                         <p className="card-text">${item.precio}</p>
                         
                         
                         </div>
                     </div>
             </div>
         </>
         
      )
 }
 
export default ItemDetail
