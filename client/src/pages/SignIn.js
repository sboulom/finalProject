import React, { useState } from 'react'
import { Container, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import './SignIn.css'
import API from "../utils/API"

const SignIn = () => {
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
    console.log("state.email", state.email)
    console.log("state.password", state.password)
    const userData = {
      username: state.username,
      password: state.password,
      email: state.email,
      name: state.name
    }
    API.login(userData).then(results=>{
      console.log(results)
    })
  }
  
  return (
    <Container className='signInWrapper'>
      <div>
        <Card className='whiteSpace'>
          <Card.Body className='cardArea'>
            <Card.Title>Sign In</Card.Title>
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
        </Card>
      </div>
    </Container>
  )
}

export default SignIn
