import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link, NavLink} from "react-router-dom";



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
                        <Nav.Link as={NavLink} activeClassName="activo" to="formulario" >Formulario</Nav.Link> 
                        <Nav.Link as={NavLink} activeClassName="activo" to="articulos" >Articulos</Nav.Link> 
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    )
}