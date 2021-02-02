import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Protected = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>{
        return (window.localStorage.getItem('access_token')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )
    }
    } />
)