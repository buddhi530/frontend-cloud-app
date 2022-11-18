import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
        <Navbar.Brand href="#home">Cloud-Assignment Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/view">
                View
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default ColorSchemesExample;