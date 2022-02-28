import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "./Navigation.css"

function Navigation() {
    return(
        < Navbar bg = "dark" variant = 'dark' expand = "lg" style = {{ marginBottom: 30 }}>
        <Container>
            <NavLink to="#" className="navlink">
                <Navbar.Brand as="span">Observatorium</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/inicio-sesion" className="navlink">
                        <Nav.Link as="span">Iniciar Sesion</Nav.Link>
                    </NavLink>
                    <NavLink to="/registro" className="navlink">
                        <Nav.Link as="span">Registro</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar >
    )
}

export default Navigation
