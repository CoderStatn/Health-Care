import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row className='bg-warning'>
                    <div className="col-12 col-md-6 my-auto">
                        <h5 className='text-'>Always there to help</h5>
                        <h1>Dr Joanna Bryan</h1>
                        <p>Vivamus pretium pellentesque vestibulum. In mollis, elit vitae rhoncus pellentesque, arcu quam imperdiet ex, vitae congue tellus turpis sed tortor. Morbi consequat vel dolor quis venenatis. Aenean non interdum purus. Maecenas sem nunc, ullamcorper sit amet nulla quis, porta pharetra velit. Nam eros nisl, consequat sit amet pharetra.</p>
                        <p>Proin congue in neque at mollis. Suspendisse eros nulla, vehicula id sollicitudin ut, feugiat sit amet ligula. Integer posuere purus lorem, id bibendum ante commodo et. Nunc ut quam ut eros accumsan eleifend. Curabitur vitae tristique augue. Morbi vitae semper lorem, id sagittis lectus.</p>
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