import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom"


const Cart = () => {
    const {carrito} = useContext(CartContext);
    const listaDeTotales = [];

if (carrito.length === 0){
    return (
        <div>
            <p>No hay productos en el carrito!</p>
            <Link to= "/">
            <a className="btn btn-light mt-3" >Volver al Home</a>
            </Link>
        </div>
    )
}else{

    return (
        <>
        <h1>Mi Carrito</h1>
        <ul>
            {carrito.map(producto => {
                const total = producto.precio * producto.cantidad;
                listaDeTotales.push(total);
                return (
                <li>
                Producto: {producto.titulo}. 
                 Cantidad: {producto.cantidad} Precio: ${producto.precio}{""} Total: ${total}
                </li>
                );
            
            })}
        
        </ul>
        <h2>Total compra: ${listaDeTotales.reduce((prev, next) => prev + next)}</h2>
        </>
    )
}
}


export default Cart
