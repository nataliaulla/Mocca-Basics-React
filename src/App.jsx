import NavBar from "./components/NavBar";
import "./components/estilos.css"
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
    return(
        
        <>
        <header>
            <p>MOCCA BASICS</p>
            <CartWidget />
            <NavBar />
            <ItemListContainer titulo="Bienvenido a Mocca Basics!" />
        </header>
        <div>
        <ItemListContainer titulo="Bienvenido a Mocca Basics!" />
        </div></>
        
    
    )
}



export default App