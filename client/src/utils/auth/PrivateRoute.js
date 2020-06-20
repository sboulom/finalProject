import React, { useContext } from "react";
// import PrivateRoute from 'react-router';
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        // fakeAuth.isAuthenticated === true
        isAuthenticated ? (
          // true
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
