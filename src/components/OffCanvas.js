import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo/mountain.png';
import logo1 from '../assets/logo/mountain2.png'

import '../styles/OffCanvas.scss'

export const OffCanvas = () => {
    return (
        <>
        <div className="componentOff">
        {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} >
                <Container fluid>
                    
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <div className='imgMobile'>
                        <img
                            className="imgLogo"
                            src={logo}
                            alt="Third slide" />
                    </div>
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    className='offBack'
                    >
                    <Offcanvas.Header closeButton>
                        <div className='headerLogo'>
                            <img src={logo1} alt="mountain">
                            </img>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='boddy'>
                        <div className='navCanvas'>
                            <div className='grow1'>
                                <img
                                className="imgLogo"
                                src={logo}
                                alt="Third slide" />
                            </div>
                            <div className='grow2'>
                                <Nav className="navv">
                                <Nav.Link href="#" className="offItems"><h4>Home</h4></Nav.Link>
                                <Nav.Link href="#about" className="offItems"><h4>About Us</h4></Nav.Link>
                                
                                <Nav.Link href="#foot" className="offItems"><h4>Contact Us</h4></Nav.Link>
                                
                                </Nav>
                                
                                </div>
                            <div className='grow3'>
                                <h4>Horizonts</h4>
                            </div>
                        </div>
                        
                    </Offcanvas.Body>
                    <div className='developed'>
                            <h3>Developed by</h3>
                            <h2>Federico campi</h2>
                        </div>
                </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </div>
        </>
    );
}

export default OffCanvas;
