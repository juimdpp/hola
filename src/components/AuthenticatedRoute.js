import React from 'react';
import {Route} from 'react-router-dom'
import { Redirect } from 'react-router';

function AuthenticatedRoute({children, ...rest}){
    const isAuthenticated = JSON.parse(window.localStorage.getItem('currentUser'));
    return (
        <div className="AuthenticatedRoute">
            {
            (isAuthenticated) ? 
            <Route {...rest} />
                :
            <Redirect to='/login'/>
            }
        </div>
    )
}

export default AuthenticatedRoute;