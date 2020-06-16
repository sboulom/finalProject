import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./index.css";

export const NavigationBar = () => (
  <Navbar collapseOnSelect className="navPaddingMobile" bg="light" expand="lg">
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
    <Nav.Link href="/" className="navIconPadding">
      <i className="fas fa-house-user mx-1"></i>
      <Navbar.Text className="navTextMobile">User Profile</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/Browse" className="navIconPadding">
      <i className="fas fa-beer mx-1"></i>
      <Navbar.Text className="navTextMobile">Browse Beers</Navbar.Text>
    </Nav.Link>
    <Nav.Link href="/addabeer" className="navIconPadding">
      <i className="fas fa-plus-circle mx-1"></i>
      <Navbar.Text className="navTextMobile">Add Custom Beer</Navbar.Text>
    </Nav.Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/signin">
          <Navbar.Text>Sign In</Navbar.Text>
        </Nav.Link>
        <Nav.Link href="/register">
          <Navbar.Text>Register</Navbar.Text>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
