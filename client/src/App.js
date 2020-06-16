import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import BrowseBeers from "./pages/BrowseBeers";
import CustomBeer from "./pages/CustomBeer";
import "./app.css";

import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />
      <Jumbotron />
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={BrowseBeers} />
          <Route path="/custom" component={CustomBeer} />
          {/* Home route temporarily will route to UserProfile until Auth is set up */}
          <Route exact path="/" component={UserProfile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
