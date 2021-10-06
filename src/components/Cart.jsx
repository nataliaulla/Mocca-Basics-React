import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";


const Cart = () => {
    const {carrito} = useContext(CartContext);
    const listaDeTotales = [];

    return (
        <>
        <h1>Mi Carrito</h1>
        <ul>
            {carrito.map(producto => {
                const total = producto.precio * producto.cantidad;
                listaDeTotales.push(total);
                return (
                <li>{producto.titulo} 
                Cantidad: {producto.cantidad}Precio: ${producto.precio}{""} Total: ${total}
                </li>
                );
            
            })}
        
        </ul>
        <h2>Total compra: ${listaDeTotales.reduce((prev, next) => prev + next)}</h2>
        </>
    )
}


export default Cart
