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
            
        </div>
    );
};

export default Testimonials;