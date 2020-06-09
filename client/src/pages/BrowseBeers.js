import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import DB from "../utils/DB.js";
import "./BrowseBeers.css";

function BrowseBeers() {
  const [beers, setBeers] = useState({ data: [] });
  const [beerSearch, setBeerSearch] = useState("");

  useEffect(() => {
    // DB.getBeers()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    API.getBeers()
      .then((res) => {
        setBeers(res.data);
        console.log(res.data.data[0]);
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
            {beers.data.slice(0, 5).map((beer, index) => {
              return (
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <h3>
                      <i class="fas fa-plus-circle"></i>
                    </h3>
                    {/* <Card.Title>Name of Beer</Card.Title> */}
                    <Card.Title>{beer.name}</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Beer Style: {beer.style.name}</li>
                        <li>ABV: {beer.abv}</li>
                        <li>Excerpt of Description: {beer.description}</li>
                        <li>Category: {beer.style.category.name}</li>
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
