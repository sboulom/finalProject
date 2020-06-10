import axios from "axios";

// export default getBeers;
export default {
  getBeers: function () {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad"
    );
  },

  getBeersLocal: function() {
    return axios.get("/api/beers", {params: {}});
  }
};

// export default {
//   getBeers: function(query) {
//     return axios.get("/api/beers", { params: { q: query } });
//   }
// };
