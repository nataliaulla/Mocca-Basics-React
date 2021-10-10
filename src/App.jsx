import NavBar from "./components/NavBar";
import "./components/estilos.css"
import CartWidget from "./components/CartWidget";
import { ItemCount } from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";




const App = () => {

    const [carrito, setCarrito] = useState([]);

    return(
    <>
        <BrowserRouter>
        
        
        <CartContext.Provider value={{carrito, setCarrito}} >
        <header>
            <NavBar />
        </header>
        

        <Switch>
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/Catalogo/:id" component={ItemListContainer}  />
        <Route path="/cart" component={Cart} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>

        </CartContext.Provider>
        
        
        </BrowserRouter>
    </>
    )
}



export default App