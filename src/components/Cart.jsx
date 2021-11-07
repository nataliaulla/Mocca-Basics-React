import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom"
import { firestore } from "../firebase";
import { useEffect } from "react";
import Form from "./Form";


const Cart = () => {
    const {carrito, setCarrito} = useContext(CartContext);
    const listaDeTotales = [];
    const handleDelete = (id) =>(
        setCarrito(carrito.filter(producto => producto.id !==id))
    )
    
    
    const procesarCompra = (nombre,telefono,email) => {
        console.log("Procesando compra")
        console.log(nombre,telefono,email)
        
    }
    useEffect(()=>{
        const db = firestore
      const coleccion = db.collection("ordenes")
        const nueva_orden = {
            buyer : {
                nombre : "Natalia",
                telefono : "123456789",
                email : "email@email.com"
    },
            items : [],
            total : 10
      }
        const consulta = coleccion.add(nueva_orden)
        consulta
            .then(resultado=>{
                console.log(resultado.id)
         })
            .catch(err=>{
                console.log(err)
            })
        
    })

if (carrito.length === 0){
    return (
        <div>
            <p>No hay productos en el carrito!</p>
            <Link to= "/">
            <span className="btn btn-light mt-3" >Volver al Home</span>
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
                 <button className="bg-red-500 active:bg-red-400 rounded px-3 py-1 inline-block m-2 text-xs" type="button" onClick= {() => handleDelete(producto.id)}> <span className="hidden lg:inline">Eliminar del carrito</span></button>
                </li>
            
                );
            
            })}
        
        </ul>
        <h2>Total compra: ${listaDeTotales.reduce((prev, next) => prev + next)}</h2>
        <h3>Finalizar compra:</h3>
        <Form onSubmit={procesarCompra}/>
        </>
    )
}
}


export default Cart
