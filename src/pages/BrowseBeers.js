import { useEffect } from "react";
import API from "../utils/API.js";

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
