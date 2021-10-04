import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
       <>
       <div>
            <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">{producto.titulo} - ${producto.precio}</h5>
                        <p className="card-text"></p>
                        <a className="btn btn-light" >Agregar!</a>
                        <Link to= {`/item/${producto.id}`}>
                        <a className="btn btn-light" >Ver detalles</a>
                        </Link>
                        
                        </div>
                    </div>
            </div>
        </>
        
     )
}

export default Item