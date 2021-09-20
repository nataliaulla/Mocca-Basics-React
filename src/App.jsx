import NavBar from "./components/NavBar";
import "./components/estilos.css"
import CartWidget from "./components/CartWidget";
import { ItemCount } from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
    return(
        
        <>
        <header>
            <p className="marca">MOCCA BASICS</p>
            <CartWidget />
            <NavBar />
            <ItemListContainer titulo="Encontrá todo lo que estás buscando!"/>
        </header>
        <div>
        <ItemCount />
        </div></>
        
    
    )
}



export default App