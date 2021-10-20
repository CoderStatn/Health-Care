import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {handleEmailChange, handle} = useAuth();
    return (
        <div>
            <div className='text-center my-3'>
                <h1>Create your account</h1>
                <Container>
                  <Row>
                    <Col md>
                      <img className='img-fluid' src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
                    </Col>
                    <Col md className='my-auto'>
                      <Form onSubmit={''}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control onBlur={''} type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control onBlur={''} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Create your account
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <Button variant="outline-danger">Google Sing In</Button>
            </div>
        </div>
    );
};

export default Register;