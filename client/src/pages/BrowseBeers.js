import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import Input from "../components/Input";
import Button from "../components/Button";

// import DB from "../utils/DB.js";

import "./BrowseBeers.css";

function BrowseBeers() {
  //const [beers, setBeers] = useState({ data: [] }); - API usage
  const [beers, setBeers] = useState([]);
  const [beerSearch, setBeerSearch] = useState("");
  // const [Description, setDescription] = useState();
  // const [StyleDescription, setStyleDescription] = useState();
  // const [beerSearch, setBeerSearch] = useState("");

  // useEffect(() => {
  //   // DB.getBeers()
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   API.getBeers()
  //     .then((res) => {
  //       setBeers(res.data);
  //       // console.log(res.data.data[0]);
  //       // res.data.data.slice(0, 2).map((beer, index) => {
  //       //   if (beer.description == null) {
  //       //     return beer.style.description;
  //       //   } else {
  //       //     return beer.description;
  //       //   }
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // API.getBeersLocal()
  //   //   .then((res) => {
  //   //     setBeers(res.data);
  //   //     console.log("database test: ");
  //   //     console.log(res.data);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });

  //   console.log("useEffect has been called");
  // }, []);

  //search functionality
  

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBeerSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log(beerSearch);
    API.getBeersLocal(beerSearch)
      .then(res => setBeers(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Container className="browseBeer">
      <h1>Browse Beer</h1>
      <Row>
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
          <div className="beerContainer">
          {!beers.length ? (
              <h1 className="text-center">No Beers to Display</h1>
            ) : (
              <div>
                {beers.map((beer, index) => {
                  return (
                    <Card className="beerCard">
                      <Card.Img variant="top" src="" className="cardImage" />
                      <Card.Body>
                        <h3>
                          <i class="fas fa-plus-circle"></i>
                        </h3>
                        {/* <Card.Title>Name of Beer</Card.Title> */}
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Title style={{ fontSize: 13 }}>
                          {beer.beerStyle} | {beer.abv}% ABV
                        </Card.Title>
                        <Card.Text>
                          <ul>
                            <li>Region/Type: {beer.beerCategory}</li>
                            <li>Excerpt of Description: {}</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BrowseBeers;

// document.getElementById("addBeer").onclick = function(){console.log('Beer Added')}