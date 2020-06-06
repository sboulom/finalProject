import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./index.css";

function Jumbo() {
  return (
    <div>
      <Jumbotron fluid className="display">
        <Container className="jumbo">
          <h1>Jumbotron</h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
