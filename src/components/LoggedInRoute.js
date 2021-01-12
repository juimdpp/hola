import React from 'react';
import { Redirect } from 'react-router';
import {Route} from 'react-router-dom'

function LoggedInRoute({children, ...rest}){
    const isAuthenticated = JSON.parse(window.localStorage.getItem('currentUser'));
    return (
        <div className="LoggedInRoute">
            {   
                isAuthenticated ? 
                <Redirect to ='/articles' />
                :
                <Route {...rest}/>
            }
        </div>
    )
}
export default LoggedInRoute;