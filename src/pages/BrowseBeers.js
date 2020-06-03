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
