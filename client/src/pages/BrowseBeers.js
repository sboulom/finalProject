import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import DB from "../utils/DB.js";
import "./BrowseBeers.css";

function BrowseBeers() {
  const [beers, setBeers] = useState([]);
  const [beerSearch, setBeerSearch] = useState("");

  
  useEffect(() => {
    DB.getBeers()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useEffect has been called");
  }, []);

  

 
  // setBeerSearch("");

  // DB.getBeers(beerSearch)
  //   .then(res => setBeers(res.data))
  //   .catch(err => console.log(err));

  return (
    <Container>
      <h1>Browse Beer</h1>
      <Row>
        <Col>
          <div className="beerContainer">
            {[1, 2, 3, 4, 5].map((Beer) => {
              return (
                <Card>
                  {/* Information below will be populated dynamically once we get the API working */}
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>{Beer.name}</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Beer Stlye: {Beer.beerStyle}</li>
                        <li>ABV: {Beer.abv}</li>
                        <li>Excerpt of Description: {Beer.shortDesc}</li>
                        <li>Category: {Beer.beerCategory}</li>
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
  );
}

export default BrowseBeers;
