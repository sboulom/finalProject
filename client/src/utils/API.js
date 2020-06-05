import axios from "axios";

// const getBeers = () => {
//   return axios.get(
//     "http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad"
//   );
// };

// export default getBeers;

export default {
  getBeers: function () {
    return axios.get(
      "http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad"
    );
  },
};

// export default {
//   getBeers: function(query) {
//     return axios.get("/api/beers", { params: { q: query } });
//   }
// };
