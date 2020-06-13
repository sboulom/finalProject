import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import API from "../utils/API.js";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import SearchBar from "../components/SearchBar/searchBar";

import './UserProfile.css'

function UserProfile() {
  const [beers, setBeers] = useState({data: []});
  // const [beerSearch, setBeerSearch] = useState("");

  const currentUser = "Alice";

  // For API -> Card Usage:
  useEffect(() => {
    API.getCurrentUserData(currentUser)
      .then((res) => {
        setBeers(res.data[0].beerCollection);
        // console.log("this is res: " + JSON.stringify(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useEffect has been called");
  }, []);

  // const handleInputChange = (event) => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { value } = event.target;
  //   setBeerSearch(value);
  // };

  // const handleFormSubmit = (event) => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   console.log(beerSearch);
  //   API.getCurrentUserData(beerSearch)
  //     .then((res) => setBeers(res.data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Container className="browseBeer">
      <div>
        <h1>Browse Beer</h1>
      </div>
      {/* <Row>
        <Col>
          <form>
            <Input
              name="BeerSearch"
              value={beerSearch}
              onChange={handleInputChange}
              placeholder="Search For a Beer"
            />
            <Button
              onClick={handleFormSubmit}
              type="success"
              className="input-lg"
            >
              Search
            </Button>
          </form>
        </Col>
      </Row> */}
      {!beers.length ? (
        <h1 className="text-center">No Beers to Display</h1>
      ) : (
      <Row>
        {beers.slice(0, 12).map((beer, index) => {
          return (
            <Col xs={6} sm={4} md={3} lg={2} xl={2} className="my-1 px-0">
              <Card className="cardHeight">
                <Card className="cardHeight cardColor">
                  <Card.Title className="ml-auto">
                    <h4>
                      <i className="fas fa-plus-circle"></i>
                    </h4>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="./assets/pixelMug.jpg"
                    className="cardImage mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{beer.name}</Card.Title>
                    <Card.Title className="subText">
                      {beer.beerStyle} | {beer.abv}% ABV
                    </Card.Title>
                    <Card.Text className="subText">
                      {beer.beerCategory}
                    </Card.Text>
                    <Card.Text>Description: {beer.shortDesc}</Card.Text>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          );
        })}
      </Row>
      )}
      {/* <Row>
        <SearchBar></SearchBar>
      </Row> */}
    </Container>

    // <Container className='userWrapper'>
    //   <h1> User Profile</h1>
    //   <Row>
    //     <Col>
    //     {/* xs ={12} sm={12} md={6} */}
    //     <div className="userBeer">
    //     {[1, 2, 3, 4, 5].map((Beer) => {
    //           return (
    //             <Card>
    //               {/* Information below will be populated dynamically once we get the API working */}
    //               <Card.Img variant="top" src="holder.js/100px160" />
    //               <Card.Body>
    //                 <Card.Title>Name of Beer</Card.Title>
    //                 <Card.Text>
    //                   <ul>
    //                     <li>Beer Style</li>
    //                     <li>ABV</li>
    //                     <li>Excerpt of Description</li>
    //                     <li>Category</li>
    //                   </ul>
    //                 </Card.Text>
    //               </Card.Body>
    //             </Card>
    //           );
    //         })}
        
        
    //     </div>
    //     </Col>
    //   </Row>
    // </Container>



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
