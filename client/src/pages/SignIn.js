import React from 'react'
import { Container, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import './SignIn.css'

const SignIn = () => {
  return (
    <Container className='signInWrapper'>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Sign In</Card.Title>
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
            <Button>
              <i class='fas fa-door-open'></i>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default SignIn
