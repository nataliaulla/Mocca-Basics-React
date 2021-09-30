import "./estilos.css"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to="/cart">
        <span className="material-icons">shopping_cart</span>
        </Link>
        
     )
}

export default CartWidget