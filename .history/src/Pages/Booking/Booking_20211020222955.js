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
                      <Row className='m-3'>
                        <Col>
                          <Form.Control type='text' placeholder="First name" required/>
                        </Col>
                        <Col>
                          <Form.Control type='text' placeholder="Last name" required/>
                            </Col>
                        </Row>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Booking;