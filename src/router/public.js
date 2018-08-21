import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        !isLoggedIn ? (
            <div>
                <Component {...rest} {...props} />
            </div>
        ) : (
            <Redirect  to="/" />
        )
    )} />
)

export default PublicRoute;