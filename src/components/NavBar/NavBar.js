import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src='assets/logo.png' alt='logo'></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Inicio</Nav.Link>
            <Nav.Link >Produtos</Nav.Link>
            <Nav.Link >Sobre Nosotros</Nav.Link>
            <Nav.Link >Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;