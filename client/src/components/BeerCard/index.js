import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Card } from "react-bootstrap";

function BeerCard(beer){
    return (
      <Col xs={6} sm={4} md={3} lg={2} xl={2} className="my-1 px-0">
        <Card className="cardHeight">
          <Card className="cardHeight cardColor">
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
                {beer.shortDesc}
              </Card.Text>
              <Card.Text>Description: {}</Card.Text>
            </Card.Body>
          </Card>
        </Card>
      </Col>
    );
}

export default BeerCard;
