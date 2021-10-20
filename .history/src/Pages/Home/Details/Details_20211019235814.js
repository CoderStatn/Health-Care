import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Details = () => {
    return (
        <div>
            <Container fluid>
                <Row className='bg-info'>
                    <Col>
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/joanna.jpg" alt="" />
                    </Col>
                    <Col>
                        <div className='py-5 text-white'>
                            <h5>The name behind the respectful results</h5>
                            <br />
                            <h1>Dr Joanna Bryan</h1>
                            <br />
                            <p>Live the price of the porch In the soft, flexible life of the Zen sniper, from which the bow of the  financing No disease or pain any poisonous consequences. Aeneas is not sometimes pure. Maecenas sem nunc, ullamcorper sit amet nulla quis, porta pharetra velit. For the clinical players, the consequences should be fun quiver.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='bg-warning'>
                    <Col>
                        <div className='py-5 text-white'>
                            <h5>Being there for you, listening & understanding</h5>
                            <br />
                            <h1>How can I help?</h1>
                            <br />
                            <p>Duis at lorem venenatis, mattis nunc sollicitudin, pellentesque nisl. The earth is the world's largest, so that the arrows take advantage of it, the environment is the consequences. The time is always configured before the billing period. Now ever the lake of life is a great time, in the tough eros to lay down. Curabitur pulvinar, no sit amet fringilla euismod, ipsum risus.</p>
                        </div>
                    </Col>
                    <Col>
                        <img className='img-fluid' src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/family.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;