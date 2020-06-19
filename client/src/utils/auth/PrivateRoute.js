import React from "react";
// import PrivateRoute from 'react-router';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // fakeAuth.isAuthenticated === true
      false ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

export default PrivateRoute;
