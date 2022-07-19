import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Inicio</Nav.Link>
            <Nav.Link >Produtos</Nav.Link>
            <Nav.Link >Sobre Nosotros</Nav.Link>
            <Nav.Link >Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;