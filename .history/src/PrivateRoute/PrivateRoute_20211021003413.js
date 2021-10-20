import React from 'react';
import useAuth from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login"
                        this.state.
                }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;