import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import BrowseBeers from "./pages/BrowseBeers";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/register" componenet={Register} />
          <Route path="/browse" component={BrowseBeers} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
