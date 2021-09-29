import NavBar from "./components/NavBar";
import "./components/estilos.css"
import CartWidget from "./components/CartWidget";
import { ItemCount } from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";




const App = () => {
    return(
        
        <>
        <header>
            <p className="marca">MOCCA BASICS</p>
            <CartWidget />
            <NavBar />
            <ItemListContainer />
            <ItemDetailContainer />
               
        </header>
        </>
        
    
    )
}



export default App