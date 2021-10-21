import { Link } from "react-router-dom"




const Item = ({producto}) => {
    return (
       <>
       <div className="itemContainer">
            <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                <div className="card-body">
                    <img className="foto" src={producto.foto}></img> 
                    <h5 className="card-title">{producto.titulo} - ${producto.precio}</h5>
                    <p className="card-text"></p>
                    <div className="botones">
                        <Link to= {`/item/${producto.id}`}>
                            <span className="btn btn-light" >Ver detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
        
     )
}

export default Item