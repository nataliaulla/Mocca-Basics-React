import NavBar from "./components/NavBar";
import "./components/estilos.css"
import CartWidget from "./components/CartWidget";
import { ItemCount } from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter , Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";




const App = () => {
    return(
        <BrowserRouter>
        
        <>
        <header>
            <NavBar />
        </header>
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/Catalogo/:id" component={ItemListContainer}  />
        <Route path="/cart" component="" />
        <Route path="/item/:id" component={ItemDetailContainer} />
        
        
        
        </>
        
        </BrowserRouter>
    )
}



export default App