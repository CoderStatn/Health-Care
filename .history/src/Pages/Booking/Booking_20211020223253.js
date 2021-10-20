import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

const Booking = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>Come & visit us</h1>
                <p className='w-50 mx-auto'>Proin et euismod tellus, et malesuada lectus. Donec velit nisi, aliquet vitae nisi vel, vulputate dictum sem.    Curabitur nec orci ipsum. Proin et ipsum ut libero rhoncus aliquet.</p>
            </div>
            <div>
                <Container>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Booking;