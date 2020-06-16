import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
// import Jumbotron from '../Jumbotron'
import "./index.css";
import API from "../../utils/API"

export const NavigationBar = () => {
    const [state, setState]= useState({
      name: ""
    }) 
    useEffect(()=>{
        API.getCurrentUserData().then((user)=> {
          console.log("user", user)
          setState({
            name: user.data.name
          })
        })
        },[])
        const logOut = () => {
          API.logOut().then(()=>{
            window.location.href="/"
          })
        }
    return(
    <div className='navbar navbar-expand'>
    <Navbar className= 'innerNavbar' bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav.Link href="/"><i class="fas fa-home"> Home</i></Nav.Link>
        <Nav.Link href='/userprofile'><i class="fas fa-house-user"> Profile</i></Nav.Link>
        <Nav.Link href='/Browse'><i class="fas fa-beer"> Browse Beers</i></Nav.Link>
        <Nav.Link href='/addabeer'><i class="fas fa-plus-square"> Add A Beer</i></Nav.Link>
      {state.name  ? 
    <div>
      <h3>{state.name}</h3>
      <Nav.Link href='#' onClick={logOut}>Log Out</Nav.Link>

    </div>
    :<div>
      <Nav.Link href='/'>Sign In</Nav.Link>
        <Nav.Link href='/register'>Register</Nav.Link>
    </div>
    }
      
        
      </Navbar.Collapse>
    </Navbar>
  </div>)

    
  
  };
