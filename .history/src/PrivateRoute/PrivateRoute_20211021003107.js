import React from 'react';
import useAuth from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={()=> user.email? children: <Redirect></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;