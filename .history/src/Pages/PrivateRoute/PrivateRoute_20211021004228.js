import React from 'react';

const PrivateRoute = () => {
    
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: location}
                }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;