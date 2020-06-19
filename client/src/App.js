import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import BrowseBeers from "./pages/BrowseBeers";
import CustomBeer from "./pages/CustomBeer";
import PrivateRoute from "./utils/auth/PrivateRoute";
import "./app.css";

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/signin"
            render={(props) => <SignIn {...props} />}
          />
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/browse" component={BrowseBeers} />
          <PrivateRoute exact path="/custom" component={CustomBeer} />
          <PrivateRoute exact path="/userprofile" component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
