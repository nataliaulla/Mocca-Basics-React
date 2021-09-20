import React, { useState } from "react";


const ItemCount = () => {
    const [valor, setValor] = useState(0);
    
    const handleSum = () => {
        setValor(valor + 1);
      }
    
    const handleSubstract = () => {
        if (valor === 0) {
          return;
        }
        setValor(valor - 1);
      }
    return (
        <div>
            <div className="card mt-5 ms-5" style={{width:"18rem"}}>
                <img src="https://enede.com.ar/shop/16035-large_default/camisa-yello.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Camisa Mykonos</h5>
                        <p className="card-text">Camisa de jean oversize</p>
                        <a className="btn btn-light" onClick={handleSum}>Agregar!</a>
                        <div className="botones mt-3">
                        <a href="#as" className="btn btn-light" onClick={handleSum} >+</a>
                        <span className="valor">{valor}</span>
                        <a href="#as" className="btn btn-light" onClick={handleSubstract} >-</a>
                        </div>
                    </div>
            </div>
        </div>
     )
}

export {ItemCount}