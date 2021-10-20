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
                    testimonials.map(testimonial => (
                        <Carousel variant="dark">
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={}
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    ))
                }
            </Container>
        </div>
    );
};

export default Testimonials;