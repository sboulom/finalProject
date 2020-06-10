import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import API from "../utils/API.js";
// import DB from "../utils/DB.js";
import "./BrowseBeers.css";

function BrowseBeers() {
  const [beers, setBeers] = useState({ data: [] });
  // const [Description, setDescription] = useState();
  // const [StyleDescription, setStyleDescription] = useState();
  // const [beerSearch, setBeerSearch] = useState("");

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
        // console.log(res.data.data[0]);
        // res.data.data.slice(0, 2).map((beer, index) => {
        //   if (beer.description == null) {
        //     return beer.style.description;
        //   } else {
        //     return beer.description;
        //   }
        // });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useEffect has been called");
  }, []);

  // DB.getBeers(beerSearch)
  //   .then(res => setBeers(res.data))
  //   .catch(err => console.log(err));

  return (
    // <Container className="browseBeer">
    //   <h1>Browse Beer</h1>
    //   <Row>
    //     <Col>
    //       <div className="beerContainer">
    <CardGroup>
      {beers.data.slice(0, 6).map((beer, index) => {
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
                {beer.style.name} | {beer.abv}% ABV
              </Card.Title>
              <Card.Text mx>Region/Type: {beer.style.category.name}</Card.Text>
              <Card.Text>Description: {}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
    // );
  );
}

export default BrowseBeers;

// document.getElementById("addBeer").onclick = function(){console.log('Beer Added')}
