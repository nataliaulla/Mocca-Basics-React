import "./estilos.css"
import { Link } from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import { CartProvider, useContext } from 'react'
import  CartContext from "../context/CartContext"
import { useState, useEffect } from 'react'
import ItemDetailContainer from "./ItemDetailContainer"



const CartWidget = () => {
    const { carrito } = useContext(CartContext);
	const [ units, setUnits ] = useState(0);
    
    const countItems = function(data){
		let counter = 0;
		carrito.map((producto) => {
			counter += producto.cantidad;
		});
		return counter;
	}

	useEffect(() => {

		setUnits(countItems);

	}, [carrito])
    
    return (
        <Link to="/cart">
        <span className="material-icons">shopping_cart</span>
         <Badge bg="light">{units}</Badge>
  
        </Link>
        
     )
}

export default CartWidget