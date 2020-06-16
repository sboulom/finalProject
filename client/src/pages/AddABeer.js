import React from "react";
// originally tried "useState" on the top
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../pages/AddABeer.css";

const AddABeer = () => {
  // const [beers, setBeers] = useState({ data: [] });

  return (
    <div >
      <Container >
        <Row>
          <Col xs={6} sm={4} md={3} lg={8} xl={8} className="my-1 px-0" className="addBeer" >
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
                  <Card.Title className="text-center">Name of Beer</Card.Title>
                  <Card.Title className="subText">
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of Beer</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Beer Name Here"
                        />
                      </Form.Group>
                    </Form>
                    <Container>
                      <Row>
                        <Col>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Style of Beer</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter Beer Style Here"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>ABV</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter ABV Here"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Container>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Category of Beer</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Category of Beer Here"
                      />
                    </Form.Group>
                  </Card.Title>
                  <Card.Text className="subText"></Card.Text>
                  {/* <Card.Text>Description: {}</Card.Text> */}
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Beer Description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <div >
                  <Container  >
                    <Row >
                      <Col className="button">
                      <Button variant="success" >Add Beer</Button>{" "}

                      </Col>
                    </Row>
                  </Container>
                  </div>
                </Card.Body>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddABeer;

