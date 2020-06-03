import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import NavigationBar from './components/NavigationBar'
import Jumbotron from './components/Jumbotron'


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
        <Router>
        <Route exact path ='/' component = {Home} />
    
    
    
      </Router>
    </React.Fragment>
  );
}

export default App;
