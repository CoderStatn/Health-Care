import React from 'react';
import { Container } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div className='bg-danger'>
            <Container>
                <div>
                    <h1>Latest News</h1>
                    <p>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
                </div>
            </Container>
        </div>
    );
};

export default LatestNews;