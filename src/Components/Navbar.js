import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarPage() {
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}  style={{ postion:"absolute" ,top:"15px"}} className="mb-3  rounded-3">
          <Container fluid>
            <Navbar.Brand href="#">Aloha </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
             
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Surfing</Nav.Link>
                  <Nav.Link href="#action2">Hula</Nav.Link>
                  <Nav.Link href="#action2">Vulcano</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button variant="success">Book a Trip</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarPage;