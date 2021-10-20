import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky='top'>
              <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about">About Dr Bryan</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                      <Nav.Link href="#blog">Blog</Nav.Link>
                      <Nav.Link href="#booking">Book a visit</Nav.Link>
                      <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                      </Navbar.Text>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;