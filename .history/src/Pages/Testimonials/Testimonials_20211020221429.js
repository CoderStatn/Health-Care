import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';

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
                {
                    testimonials
                }
            </Container>
        </div>
    );
};

export default Testimonials;