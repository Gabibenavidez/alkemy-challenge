import { Navbar, Container, Nav} from "react-bootstrap";
import Logout from "../Login/Logout"


const NavBar = () => {

    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">SuperHero-app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Logout />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;