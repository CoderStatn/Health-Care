import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="col-12 col-md-6">
                        <h1>Dr Joanna Brya</h1>
                        <p>Aenean vel justo tempus, suscipit nisl non, tristique arcu. Vestibulum placerat accumsan accumsan. In hac habitasse platea dictumst. Sed at vulputate velit, id venenatis lacus. Sed vel justo non sapien vehicula fringilla et in neque. Vivamus eget tellus vitae dolor tempor auctor id vitae nisl. Sed ac mi ut augue condimentum molestie eu in elit. In at cursus enim, eget cursus massa. Suspendisse faucibus vel turpis sed pulvinar.</p>
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