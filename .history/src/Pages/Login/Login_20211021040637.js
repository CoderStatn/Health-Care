import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const { handleEmailChange, handlePasswordChange, handleLogin, handleResetPassword } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
        })
    }

    return (
        <div className='text-center my-4'>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <Button onClick={handleResetPassword} variant=''>Reset Password</Button>
            <br />
            <p>New user? <Link to='/register'>Create new account</Link> </p>
            <Button onClick={handleGoogleLogin} variant="outline-danger">Google Sing In</Button>
        </div>
    );
};

export default Login;