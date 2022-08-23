import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from  'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img src='assets/logo.png' alt='logo'></img>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="links">Inicio</Link>
            {/* <Link to="/productos" className="links">Productos</Link> */}
            <NavDropdown title="Productos"  id="collasible-nav-dropdown">
              <Link to="/category/pantalones" className="links-drop">Pantalones</Link>
              <NavDropdown.Divider />
              <Link to="/category/remeras" className="links-drop">Remeras</Link>
              <NavDropdown.Divider />
              <Link to="/category/abrigo" className="links-drop">Buzos y Camperas</Link>
              <NavDropdown.Divider />
              <Link to="/productos" className="links-drop">Todos los productos</Link>
            </NavDropdown>
            <Link to="/nosotros" className="links">Sobre Nosotros</Link>
            <Link to="/contacto" className="links">Contacto</Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;