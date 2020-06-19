import React from "react";
const DeveloperContext = React.createContext({
  name: "",
  email: "",
  username: "",
  beerCollection: [],
});
export default DeveloperContext;
