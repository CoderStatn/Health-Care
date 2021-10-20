import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="col-12 col-md-6">
                        <h5>Always there to help</h5>
                        <br />
                        <h1>Dr Joanna Bryan</h1>
                        <p>Vivamus pretium pellentesque vestibulum. In mollis, elit vitae rhoncus pellentesque, arcu quam imperdiet ex, vitae congue tellus turpis sed tortor. Morbi consequat vel dolor quis venenatis. Aenean non interdum purus. Maecenas sem nunc, ullamcorper sit amet nulla quis, porta pharetra velit. Nam eros nisl, consequat sit amet pharetra. <br /></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/services-1.jpg" alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;