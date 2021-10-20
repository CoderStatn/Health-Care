import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>Create your account</h1>
                <Form>
                  <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Create your account
                  </Button>
                </Form>
                <br />
                <p>Already have an account? <Link to='/register'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;