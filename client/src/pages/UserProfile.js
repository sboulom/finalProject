import React, { useState } from "react";
import { useEffect } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import API from "../utils/API.js";
import BeerCard from "../components/BeerCard";

import "./UserProfile.css";

function UserProfile() {
  const [beers, setBeers] = useState({ data: [] });

  const currentUser = "Alice";

  // For API -> Card Usage:
  useEffect(() => {
    API.getCurrentUserData(currentUser)
      .then((res) => {
        setBeers(res.data[0].beerCollection);
        console.log("this is res: " + JSON.stringify(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("useEffect has been called");
  }, []);

  return (
    <div>
      <Jumbotron fluid className="jumboUser mb-1">
        <Container className="">My Beer Collection</Container>
      </Jumbotron>

      <Container className="">
        {!beers.length ? (
          <h1 className="text-center">No Beers to Display</h1>
        ) : (
          <Row>
            {beers.slice(0, 12).map((beer, index) => {
              return BeerCard(beer);
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default UserProfile;
