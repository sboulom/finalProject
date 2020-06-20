import React from "react";
const DeveloperContext = React.createContext({
  name: "",
  email: "",
  username: "",
  beerCollection: [],
  isAuthenticated: true,
});
export default DeveloperContext;
