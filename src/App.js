import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { NavigationBar } from "./components/NavigationBar";
import Wrapper from "./components/Wrapper/wrapper";
import SignInPage from "./components/SignInPage/signIn";
import Registration from "./components/Registration/registration";
import Jumbotron from './components/Jumbotron'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />

      <Jumbotron />
        <Router>
        <Route exact path ='/' component = {Home} />
    
    


      </Router>
      <Wrapper>
        <Registration />
        <SignInPage/>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
