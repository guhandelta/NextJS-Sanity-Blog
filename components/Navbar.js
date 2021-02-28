import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default  ({ theme, toggleTheme }) => {
    return (
        <div>
            <Navbar
                variant={theme.type}
                className="gp-navbar gp-nav-base"
                bg="transparent"
                expand="lg" 
            >
                <Navbar.Brand className="gp-navbar-brand">
                    <a style={{color: theme.fontColor}} href="/">Guhaprasaanth</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <ThemeToggle onChange={toggleTheme} />
                        <Nav.Link 
                            as={() => 
                                <Link href="/">
                                    <a className="gp-navbar-item gp-navbar-link" >Home</a>
                                </Link>}
                        />
                        {/* <button className="btn btn-success" onClick={toggleTheme}>{theme.type}</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </div>
    )
}



