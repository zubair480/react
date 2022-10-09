import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Algorithm Pirates</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
