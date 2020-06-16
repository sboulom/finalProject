import React from "react";
import { Carousel } from "react-bootstrap";
import "./index.css";

function Jumbo() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="cImg"
            src="/assets/beerImage2.jpg"
            alt="Three Beers"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="cImg" src="/assets/barTap2.jpg" alt="Bar Taps" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="cImg"
            src="/assets/beerFlight.jpg"
            alt="Beer Flight"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="cImg" src="/assets/cheers.jpg" alt="Cheers" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Jumbo;

{
  /* // <div>
        //   <h1 className='statsDiv'>Title</h1>
        //   <h2>Stats</h2>
        // </div> */
}
