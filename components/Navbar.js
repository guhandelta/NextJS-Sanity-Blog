import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default  () => {
    return (
        <div>
            <Navbar
                className="gp-navbar gp-nav-base"
                bg="transparent"
                expand="lg" 
            >
                <Navbar.Brand className="gp-navbar-brand">
                    <a href="/">Guhaprasaanth</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="gp-navbar-item gp-navbar-link" href='/'>
                            Home
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </div>
    )
}



