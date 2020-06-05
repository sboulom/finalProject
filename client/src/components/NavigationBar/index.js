import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css'

// export const NavigationBar = () => (
//     <div>
//         <Navbar.Brand href= "/">BeerTopia</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" />
//          <Nav className="ml-auto">
//          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
//          <Nav.Item><Nav.Link href="/Contact">Rate Your Beer</Nav.Link></Nav.Item>
//          <Nav.Item><Nav.Link href="/Beer">Beer</Nav.Link></Nav.Item>
//         </Nav>
//     </div>
// )

function NavigationBar(){
   return(
    <div className="navBar">
    <Navbar bg="dark" variant="dark"></Navbar>
    {/* <Navbar.Brand href= "/">BeerTopia</Navbar.Brand> */}
    <Navbar.Collapse id="basic-navbar-nav" />
     <Nav className="ml-auto">
     <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link href="/userProfile">Rate Your Beer</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link href="/browse">Beer</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link href="/signin">Sign In</Nav.Link></Nav.Item>
    </Nav>
    </div>
   )
}

export default NavigationBar
