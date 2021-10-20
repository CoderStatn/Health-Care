import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="col-12 col-md-6">
                        <img src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/services-1.jpg" alt="" />
                    </div>
                    <div className="col-12">
                        <h1>Best psychological procedures</h1>
                        <p></p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;