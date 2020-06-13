import React from 'react'
import {Jumbotron, Container, Carousel} from 'react-bootstrap'
import './index.css'

function Jumbo() {
  return (
    <div>
      <Jumbotron fluid className="display">
        <Container className="jumbo">
        <img className='cImg' src='/assets/beerImage2.jpg'alt='Three Beers'/>
      </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo