import React from 'react';
import { Container } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div className='bg-danger'>
            <Container>
                <div className='py-4'>
                    <h1>Latest News</h1>
                    <p className='w-50'>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
                </div>
            </Container>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </div>
    );
};

export default LatestNews;