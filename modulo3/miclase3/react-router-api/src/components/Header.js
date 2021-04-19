import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from "react-router-dom";



export default function Header(props) {
    return (
        <div>
            <header className="">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Practica React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} activeClassName="activo" to="/" exact >Home</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="activo" to="harry-potter" >Harry Potter</Nav.Link>
                        </Nav>
                        <span>{props.user}</span>
                        <Button as={NavLink} activeClassName="activo" to="login" >Login</Button>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    )
}