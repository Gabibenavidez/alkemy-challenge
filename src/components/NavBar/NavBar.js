import { Navbar, Container, Nav} from "react-bootstrap";
import useUser from '../../hooks/useUser';

const NavBar = () => {

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SuperHero-app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;