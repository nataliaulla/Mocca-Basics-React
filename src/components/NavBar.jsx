import CartWidget from "./CartWidget"
import "./estilos.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"



const { Item } = Nav
const {Brand,Collapse,Toggle} = Navbar

const NavBar = () => {
    return (
        <Navbar>
            <Container fluid>
                <Brand>
                <Link to="/"><h1 className="marca">Mocca Basics</h1></Link>
                </Brand>
                <Nav>
                    <Item>
                        <Link className="nav-link" to="/Catalogo/Mocca">Catalogo Mocca</Link> 
                    </Item>
                    <Item>
                        <Link className="nav-link" to="/Catalogo/Sale">Catalogo Sale</Link>
                    </Item>
                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>
     )
}

export default NavBar