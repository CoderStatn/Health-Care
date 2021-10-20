import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const { user } = useFirebase();
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                    <Navbar.Brand href="#home">Pshychiatrist Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/about">About Dr Bryan</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/service">Services</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/testimonial">Testimonial</Nav.Link>
                      <Nav.Link className='text-dark' as={Link} to="/booking">Book a visit</Nav.Link>
                      {
                user.email ?
                  <Button variant=''>Logout</Button>
                  :
                        <Nav.Link className='text-dark' as={Link} to="/login">Login</Nav.Link>
                      }
                      <Navbar.Text>
                        Signed in as: Mark Otto
                      </Navbar.Text>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;