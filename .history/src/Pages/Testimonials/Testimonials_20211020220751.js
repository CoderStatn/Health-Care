import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Testimonials = () => {
    const [testimonial, setServices] = useState([]);
    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>This is testiomonial</h1>
        </div>
    );
};

export default Testimonials;