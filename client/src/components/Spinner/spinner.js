import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../Spinner/spinner.css"

const loadSpinner = () => {
    // const [isLoading, setLoading] = useState(false);

  return (
    <div >
      <Spinner animation="border" role="status" className="spinner" >
        <span className="sr-only" >Brewing...</span>
      </Spinner>
    </div>
  );
};

export default loadSpinner;

// Maybe a setTimeout method would help to get the spinner to appear.
// But how do I write the code for that?
