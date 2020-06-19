import React from 'react';
import PrivateRoute from 'react-router';
import { Route, Redirect } from 'react-router-dom'


const PRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      // fakeAuth.isAuthenticated === true
      true
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
)

export default PRoute;