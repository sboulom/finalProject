import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import Input from "../components/Input";
import Button from "../components/Button";
// import SearchBar from "../components/SearchBar/searchBar";
import "./BrowseBeers.css";

function BrowseBeers() {
  // For API -> Card Usage:
  const [beers, setBeers] = useState({ data: [] });
  // const [beers, setBeers] = useState([]);
  const [beerSearch, setBeerSearch] = useState("");

  // For API -> Card Usage:
  useEffect(() => {
    API.getBeers()
      .then((res) => {
        setBeers(res.data);
        // console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useEffect has been called");
  }, []);

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBeerSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log(beerSearch);
    API.getBeersLocal(beerSearch)
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container className="browseBeer">
      <div>
        <h1>Browse Beer</h1>
      </div>
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
        </Col>
      </Row>
      {/* {!beers.length ? (
        <h1 className="text-center">No Beers to Display</h1>
      ) : ( */}
      <Row>
        {beers.data.slice(0, 12).map((beer, index) => {
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
                      {beer.style.name} | {beer.abv}% ABV
                    </Card.Title>
                    <Card.Text className="subText">
                      {beer.style.category.name}
                    </Card.Text>
                    <Card.Text>Description: {}</Card.Text>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default BrowseBeers;

// document.getElementById("addBeer").onclick = function(){console.log('Beer Added')}
