import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../Spinner/spinner.css"

const loadSpinner = () => {
    const [isLoading, setLoading] = useState(false);

  return (
    <div >
      <Spinner animation="border" role="status" >
        <span className="sr-only" className="spinner" >Brewing...</span>
      </Spinner>
    </div>
  );
};

export default loadSpinner;
