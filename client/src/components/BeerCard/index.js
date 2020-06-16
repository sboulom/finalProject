import React from "react";
import { Col, Card } from "react-bootstrap";

function BeerCard(beer) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} xl={2} className="my-1 px-0">
      <Card className="cardHeight">
        <Card className="cardHeight cardColor">
          <Card.Title className="ml-auto">
            <h4>
              <i className="mx-1" />
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
            <Card.Text className="subText">{beer.beerCategory}</Card.Text>
            <Card.Text>Description: {beer.shortDesc}</Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </Col>
  );
}

export default BeerCard;
