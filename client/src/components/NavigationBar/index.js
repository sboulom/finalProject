import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import Jumbotron from '../Jumbotron'
import "./index.css";

export const NavigationBar = () => (
  // <div className="navbar navbar-expand">
  <Navbar className="innerNavbar" bg="light" expand="lg">
    <Navbar.Brand className="mx-1">
      <img
        src="./assets/beerIcon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="beerIcon logo"
      />
    </Navbar.Brand>
    <Navbar.Brand>TeamBeer</Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav className="mr-auto" />
    <Nav.Link href="/">
      <i class="fas fa-house-user"> User Profile</i>
    </Nav.Link>
    <Nav.Link href="/Browse">
      <i class="fas fa-beer"> Browse Beers</i>
    </Nav.Link>
    <Nav.Link href="/addabeer">
      <i class="fas fa-plus-square"> Add Custom Beer</i>
    </Nav.Link>
    <Nav.Link href="/signin">Sign In</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>
    {/* </Navbar.Collapse> */}
  </Navbar>
  // </div>
);
