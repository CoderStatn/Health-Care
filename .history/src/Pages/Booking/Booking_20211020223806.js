import React from 'react';
import { Form, Container, Button, FloatingLabel } from 'react-bootstrap';

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
                            <Form.Control type="text" placeholder="Enter Your Name" required/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" placeholder="Email" required/>
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="date" required/>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="floatingTextarea" label="Your Message" className="mb-3">
                              <Form.Control as="textarea" placeholder="Leave a message here" />
                            </FloatingLabel>
                        </Form.Group>
                      <Button variant="primary" type="submit">
                        Book your appointment
                      </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Booking;