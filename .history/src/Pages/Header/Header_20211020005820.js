import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                    <Navbar.Brand href="#home">Pshychiatrist Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/about">About Dr Bryan</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/services">Services</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/testimonial">Testimonial</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/blog">Blog</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/booking">Book a visit</Nav.Link>
                      <Navbar.Text>
                        Signed in as: <Link to="/login">Mark Otto</Link>
                      </Navbar.Text>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;