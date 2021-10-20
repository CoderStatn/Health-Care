import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Visiting = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/book-image.jpg" alt="" />
                    </Col>
                    <Col>
                        <div>
                            <h1>Come & visit us</h1>
                            <br />
                            <p>But the earth and the memories, and the grid bed. Until he wants to save, or the economic life has been said, from the Olympics it is important. Curabitur nec orci ipsum. As stated above, there is a lot of free travel.</p>
                            <br />
                            <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Em</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                              </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Visiting;