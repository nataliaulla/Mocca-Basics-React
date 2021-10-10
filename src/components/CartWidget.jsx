import "./estilos.css"
import { Link } from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import { useContext } from 'react'
import CartContext from "../context/CartContext"



const CartWidget = () => {
    

    
    return (
        <Link to="/cart">
        <span className="material-icons">shopping_cart</span>
         <Badge bg="light"></Badge>
  
        </Link>
        
     )
}

export default CartWidget