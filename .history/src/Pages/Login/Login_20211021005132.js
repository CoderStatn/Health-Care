import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const location= useLocat
    return (
        <div className='text-center my-4'>
            <h1>Login</h1>
            <Form>
              <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <br />
            <p>New user? <Link to='/register'>Create new account</Link> </p>
            <Button onClick={signInUsingGoogle} variant="outline-danger">Google Sing In</Button>
        </div>
    );
};

export default Login;