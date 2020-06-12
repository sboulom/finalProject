import React from "react";
import { Container, InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import './Register.css'


const Register = () => {
  return(
    <Container className='registerWrapper'>
    <div>
        <Card.Body className='color'>
          <Card.Title>Sign Up</Card.Title>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='First Name'
              aria-label='First Name'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Last Name'
              aria-label='Last Name'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Email'
              aria-label='Email'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Password'
              aria-label='Password'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
          <Button variant="outline-secondary">Submit</Button>
        </Card.Body>
    </div>
  </Container>
  )
};
export default Register;
