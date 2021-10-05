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
                <Link to="/"><img className="logo" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/297/506/themes/common/logo-324512806-1596577499-bb675bdd0e422da396048036b0675fb01596577499-320-0.png?0"></img></Link>
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