import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import './Register.css'
import API from "../utils/API"

const Register = () => {
  const [ state, setState ] = useState({ 
    username: "",
    password: "",
    email: "",
    name: ""
  })
    const  handleChange = event => {
    const {name, value} = event.target
    setState ({
      ...state, 
      [name]: value
    })
    
  }
  const handleSubmit = event => {
    console.log("state.name", state.name)
    console.log("state.email", state.email)
    console.log("state.username", state.username)
    console.log("state.password", state.password)
    const userData = {
      username: state.username,
      password: state.password,
      email: state.email,
      name: state.name
    }
    API.signup(userData).then(results=>{
      // console.log(results)
    })
  }
  
  return(
    <Container className='registerWrapper'>
    <div>
        <Card.Body className='color'>
          <Card.Title>Sign Up</Card.Title>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Name'
              aria-label='Name'
              aria-describedby='basic-addon1'
              name = "name"
              value = { state.name }
              onChange = { handleChange }
            />
          </InputGroup>

          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Email'
              aria-label='Email'
              aria-describedby='basic-addon1'
              name = "email"
              value = { state.email }
              onChange = { handleChange }
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='User Name'
              aria-label='User Name'
              aria-describedby='basic-addon1'
              name = "username"
              value = { state.username }
              onChange = { handleChange }
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Password'
              aria-label='Password'
              aria-describedby='basic-addon1'
              name = "password"
              value = { state.password }
              onChange = { handleChange }
            />
          </InputGroup>
          <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
        </Card.Body>
    </div>

  </Container>
  )
};
export default Register;
