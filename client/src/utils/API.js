import axios from "axios";

// export default getBeers;
export default {
  getBeers: function () {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad"
    );
  },

  getBeersLocal: function(query) {
    return axios.get("/api/beers", { params: { q: query } });
  },

  getCurrentUserData: function(query) {
    return axios.get("/api/userdata", { params: { q: query } });
  },

  signup: function(userData){
    return axios.post("/api/register", userData)
    
  },

  login: function(userData){
    return axios.post("/api/login", userData)
  },

  logOut: function(){
    return axios.get("/api/logout")
  },

  addBrowsedBeer: function(converted_beer){
    return axios.put('/add_browsed_beer/:user_id', converted_beer)
  }

  // getUser: function(){
  //   return axios.get("/api/user")
  // }

};

// export default {
//   getBeers: function(query) {
//     return axios.get("/api/beers", { params: { q: query } });
//   }
// };
