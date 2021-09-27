
const Item = ({producto}) => {
    return (
       <>
       <div>
            <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">{producto.titulo} - ${producto.precio}</h5>
                        <p className="card-text">Camisa de jean oversize</p>
                        <a className="btn btn-light" >Agregar!</a>
                        
                        </div>
                    </div>
            </div>
        </>
        
     )
}

export default Item