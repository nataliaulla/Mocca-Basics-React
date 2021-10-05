import React, { useState } from "react";


const ItemCount = ({onAdd}) => {
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
          
          <div className="botones mt-3">
            <a href="#as" className="btn btn-light" onClick={handleSum} >+</a>
            <span className="valor">{valor}</span>
            <a href="#as" className="btn btn-light" onClick={handleSubstract} >-</a>
          </div>
          <a className="btn btn-light mt-3" onClick={() => onAdd(valor)}>Agregar!</a> 
        </div>
            
     )
}

export {ItemCount}