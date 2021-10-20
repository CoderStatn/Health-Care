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
                        <Col>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Services;