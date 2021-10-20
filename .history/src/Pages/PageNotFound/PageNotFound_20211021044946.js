import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <img className='img-fluid' src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            <Link>
                <Button></Button>
            </Link>
        </div>
    );
};

export default PageNotFound;