import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    return (
        <div>
            <Container>
            <Row>
                {
                    testimonials.map((service) => (
                        <Col sm lg={3}>
                            <Card className="my-3">
                              <Card.Img height='200px' variant="top" src={service.image} />
                              <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.info}</Card.Text>
                              </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
        </div>
    );
};

export default Testimonials;