import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='text-center my-3'>
                <h1>Create your account</h1>
                <Row>
                  <Col>
                    <img className='img-fluid' src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
                  </Col>
                  <Col></Col>
                </Row>
                <br />
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <Button variant="outline-danger">Google Sing In</Button>
            </div>
        </div>
    );
};

export default Register;