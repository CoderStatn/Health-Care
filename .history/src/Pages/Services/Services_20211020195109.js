import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container></Container>
    );
};

export default Services;