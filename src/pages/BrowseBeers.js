<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import API from "../utils/API";

const BrowseBeers = () => {
  // const []
  useEffect(() => {
    API.getBeers().then((res) => {
      console.log(res);
    });
    console.log("useEffect has been called");
  }, []);
  return "";
};

export default BrowseBeers;
=======
import React from "react";

>>>>>>> e6f3acb9297d4465d8a7d789ecc91d43fdb8326e
