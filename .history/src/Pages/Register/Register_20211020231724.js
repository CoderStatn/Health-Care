import React from 'react';

const Register = () => {
    return (
        <div>
            <div>
                <h1>Create your account</h1>
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
            </div>
        </div>
    );
};

export default Register;