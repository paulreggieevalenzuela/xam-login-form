/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Render a private routes
 */
import * as React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    // check if user is logged in
    const hasAvailableToken = window.localStorage.getItem('branchId');
    let isAuthenticated = !!hasAvailableToken;

    // return the proper path
    // if user is logged in, render the page else navigate to "/"
    return (
        <React.Fragment>
            {isAuthenticated ? children : <Navigate to="/" />}
        </React.Fragment>
    );
}
