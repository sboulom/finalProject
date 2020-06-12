import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './UserProfile.css'


function UserProfile() {
  return (
    <Container className='userWrapper'>
      <h1> User Profile</h1>
      <Row>
        <Col>
        {/* xs ={12} sm={12} md={6} */}
        <div className="userBeer">
        {[1, 2, 3, 4, 5].map((Beer) => {
              return (
                <Card>
                  {/* Information below will be populated dynamically once we get the API working */}
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Name of Beer</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Beer Style</li>
                        <li>ABV</li>
                        <li>Excerpt of Description</li>
                        <li>Category</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        
        
        </div>
        </Col>
      </Row>
    </Container>



    // <div className='wrapper'>
    //   <h1>User Profile</h1>
    //   <Container fluid='sm'>
    //     <CardGroup>
    //       <Card>
    //         <Card.Img variant='top' src='holder.js/100px160' />
    //         <Card.Body>
    //           <Card.Title>Name of Beer</Card.Title>
    //           <Card.Text>
    //            all the tuff 
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //       <Card>
    //         <Card.Img variant='top' src='holder.js/100px160' />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This card has supporting text below as a natural lead-in to
    //             additional content.{' '}
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
         
    //     </CardGroup>
    //   </Container>
    // </div>
  )
}

export default UserProfile
