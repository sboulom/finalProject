import React from 'react'
import {Container, CardGroup, Card} from 'react-bootstrap'
import './UserProfile.css'

function UserProfile() {
  return (
    <div className='wrapper'>
      <h1>User Profile</h1>
      <Container fluid='sm'>
        <CardGroup>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>Name of Beer</Card.Title>
              <Card.Text>
               all the tuff 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default UserProfile
