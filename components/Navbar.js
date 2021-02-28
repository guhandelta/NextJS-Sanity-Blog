import { useTheme } from 'provider/ThemeProvider';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default  () => {
    const { theme, toggleTheme } = useTheme();
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
                        <Nav.Link 
                            as={() => 
                                <Link href="/">
                                    <a className="gp-navbar-item gp-navbar-link" >Home</a>
                                </Link>}
                        />
                        <button className="btn btn-success" onClick={toggleTheme}>{theme.type}</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </div>
    )
}



