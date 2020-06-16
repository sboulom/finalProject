import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";

export const NavigationBar = () => (
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
    <Nav className="mr-auto" />
    <Nav.Link href="/">
      <i className="fas fa-house-user mx-1"></i>
      <Navbar.Text>User Profile</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/Browse">
      <i className="fas fa-beer mx-1"></i>
      <Navbar.Text>Browse Beers</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/addabeer">
      <i className="fas fa-plus-circle mx-1"></i>
      <Navbar.Text>Add Custom Beer</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/signin">
      <Navbar.Text>Sign In</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/register">
      <Navbar.Text>Register</Navbar.Text>
    </Nav.Link>
  </Navbar>
);
