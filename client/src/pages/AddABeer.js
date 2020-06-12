import React from "react";
import "../pages/AddABeer.css";

const AddABeer = () => {
  return (
    <div>
      <Container>
      <Row>
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
                <Card.Title className="text-center">Name of Beer</Card.Title>
                <Card.Title className="subText">
                  Style of Beer | A number goes here lmao% ABV
                </Card.Title>
                <Card.Text className="subText">Category of Beer</Card.Text>
                <Card.Text>Description: {}</Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    // <div className="addBeerForm">
    //   <div className="beerName">
    //     <input
    //       type="text"
    //       class="form-control"
    //       placeholder="Beer Name"
    //       aria-label="Recipient's username"
    //       aria-describedby="button-addon2"
    //     />
    //     <div class="input-group-append">

    //     </div>
    //   </div>

    //   <div className="beerName">
    //     <input
    //       type="text"
    //       class="form-control"
    //       placeholder="Style of Beer"
    //       aria-label="Recipient's username"
    //       aria-describedby="button-addon2"
    //     />
    //     <div class="input-group-append">

    //     </div>
    //   </div>
    //   <div className="beerName">
    //     <input
    //       type="text"
    //       class="form-control"
    //       placeholder="ABV"
    //       aria-label="Recipient's username"
    //       aria-describedby="button-addon2"
    //     />
    //     <div class="input-group-append">

    //     </div>
    //   </div>
    //   <div className="beerName">
    //     <input
    //       type="text"
    //       class="form-control"
    //       placeholder="Beer Category"
    //       aria-label="Recipient's username"
    //       aria-describedby="button-addon2"
    //     />
    //     <div class="input-group-append">

    //     </div>
    //   </div>
    //   <div class="form-group">
    //     <label for="exampleFormControlTextarea1"></label>
    //     <textarea
    //       class="form-control"
    //       id="exampleFormControlTextarea1"
    //       placeholder="Short Description"
    //       rows="3"
    //     ></textarea>
    //           <button
    //         className="descriptionButton"
    //         type="button"
    //         id="button-addon2"
    //       >
    //         Beer Me
    //       </button>
    //   </div>
    // </div>
  );
};

export default AddABeer;
