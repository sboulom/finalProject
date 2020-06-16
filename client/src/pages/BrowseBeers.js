import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import Input from "../components/Input";
import Button from "../components/Button";
import BrowseBeerCard from "../components/BrowseBeerCard";

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

  // Destructure the name and value properties off of event.target
  // Update the appropriate state
  const handleInputChange = (event) => {
    const { value } = event.target;
    setBeerSearch(value);
  };

  // When the form is submitted, prevent its default behavior
  //  Get BeersLocal update the BeersLocal state
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(beerSearch);
    API.getBeersLocal(beerSearch)
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container className=" py-0">
      <div>
        <h1>Browse Beer</h1>
      </div>
      <Row>
        <Col>
          <form>
            <Row>
              <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                <Input
                  name="BeerSearch"
                  value={beerSearch}
                  onChange={handleInputChange}
                  placeholder="Search For a Beer"
                />
              </Col>
              <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                <Button
                  type="success"
                  onClick={handleFormSubmit}
                  className="searchWidth my-1"
                >
                  Search
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      {/* {!beers.length ? (
        <h1 className="text-center">No Beers to Display</h1>
      ) : ( */}
      <Row>
        {beers.data.slice(0, 6).map((beer, index) => {
          return BrowseBeerCard(beer);
        })}
      </Row>
    </Container>
  );
}
export default BrowseBeers;

// document.getElementById("addBeer").onclick = function(){console.log('Beer Added')}
