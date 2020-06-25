import React, { useState } from "react";
// originally tried "useState" on the top
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../pages/CustomBeer.css";
import API from "../utils/API";
import { NavigationBar } from "../components/NavigationBar";

const CustomBeer = () => {
  const [beerName, setBeerName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");
  const [ABV, setABV] = useState("");
  const [beerCategory, setBeerCategory] = useState("");
  const [beerDesc, setBeerDesc] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleBeerNameChange = (event) => {
    const { value } = event.target;
    setBeerName(value);
  };
  const handleBeerStyleChange = (event) => {
    const { value } = event.target;
    setBeerStyle(value);
  };
  const handleABVChange = (event) => {
    const { value } = event.target;
    setABV(value);
  };
  const handleBeerCategoryChange = (event) => {
    const { value } = event.target;
    setBeerCategory(value);
  };
  const handleBeerDescChange = (event) => {
    const { value } = event.target;
    setBeerDesc(value);
  };

  // var current_user = "Alice";

  const handleFormSubmit = (event) => {
    event.preventDefault();

    var converted_beer = {
      picture: "",
      name: beerName,
      beerStyle: beerStyle,
      abv: ABV,
      beerCategory: beerCategory,
      shortDesc: beerDesc,
    };

    API.getUser().then((res) => {
      console.log(res);
      const user = res.data[0];
      console.log(user);
      console.log(converted_beer);
      user.beerCollection.push(converted_beer);
      API.addBeer(user).catch((err) => console.log(err));
    });

    // API.getCurrentUserData(current_user).then((res) => {
    //   var updated_user_data = res.data[0];
    //   updated_user_data.beerCollection.push(converted_beer);
    //   API.addBrowsedBeer(updated_user_data).catch((err) => console.log(err));
    // });

    simpleFeedback();
  };

  const simpleFeedback = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="my-1 px-0 addBeer">
            <Card className="cardHeight">
              <Card className="cardHeight cardColor">
                <Card.Title className="ml-auto">
                  <h4>{/* <i className="fas fa-plus-circle"></i> */}</h4>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src="./assets/pixelMug.jpg"
                  className="cardImage mx-auto"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Add Your Own Beer Review!
                  </Card.Title>
                  <Card.Title className="subText">
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Beer Name Here"
                          value={beerName}
                          onChange={handleBeerNameChange}
                        />
                      </Form.Group>
                    </Form>
                    <Container>
                      <Row>
                        <Col
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          xl={6}
                          className="pl-0 pr-1"
                        >
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Style</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter Beer Style Here"
                                value={beerStyle}
                                onChange={handleBeerStyleChange}
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          xl={6}
                          className="pl-1 pr-0"
                        >
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>ABV</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter ABV Here"
                                value={ABV}
                                onChange={handleABVChange}
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Container>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Category of Beer Here"
                        value={beerCategory}
                        onChange={handleBeerCategoryChange}
                      />
                    </Form.Group>
                  </Card.Title>
                  <Card.Text className="subText"></Card.Text>
                  {/* <Card.Text>Description: {}</Card.Text> */}
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Beer Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      value={beerDesc}
                      onChange={handleBeerDescChange}
                    />
                  </Form.Group>
                  <div>
                    <Container>
                      <Row>
                        <Col className="button">
                          <Button variant="success" onClick={handleFormSubmit}>
                            {isClicked ? "Beer Added!" : "Add Beer"}
                          </Button>{" "}
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

export default CustomBeer;
