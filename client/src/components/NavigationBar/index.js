import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Jumbotron from "../Jumbotron";

const Styles = styled.div`
  .navbar {
    background-color: #222;

    &:hover {
      color: #8b0000;
    }
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar.Brand href="/">BeerTopia</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" />
    <Nav className="ml-auto">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Rate Your Beer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Beer">Beer</Nav.Link>
      </Nav.Item>
    </Nav>
    <Jumbotron />
  </Styles>
);
