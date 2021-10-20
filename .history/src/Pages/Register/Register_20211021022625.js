import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='text-center my-3'>
                <h1>Create your account</h1>
                <Container>
                  
                </Container>
                <br />
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <Button variant="outline-danger">Google Sing In</Button>
            </div>
        </div>
    );
};

export default Register;