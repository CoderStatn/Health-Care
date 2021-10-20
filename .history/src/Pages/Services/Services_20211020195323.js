import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <Row>
                {
                    services.map((service) => (
                        <Col xs lg={}>
                            <Card className="my-3">
                              <Card.Img height='200px' variant="top" src={course.image} />
                              <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>{course.info}</Card.Text>
                                    <Button variant="primary">Enroll Now</Button>
                              </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Services;