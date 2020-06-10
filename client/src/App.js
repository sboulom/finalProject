import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import BrowseBeers from "./pages/BrowseBeers";
import "./app.css";
// import beerImage from "../public/assets/beerImage2.jpg";

function App() {
  return (
    <div className="wrapper">
    {/* <div style = {{ backgroundImage: `url (${ beerImage })` }} className="wrapper"> */}
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={BrowseBeers} />
          {/* Home route temporarily will route to UserProfile until Auth is set up */}
          <Route exact path="/" component={UserProfile}>
          {/* <div class="lds-circle"><div></div></div> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
