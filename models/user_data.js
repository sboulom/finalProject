const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Beer = require("./beer");


const userDataSchema = new mongoose.Schema({
  username: {
    //the user's username
    type: String,
    required: true,
  },
  password: {
    //the user's password for sign-in
    //NOTE: Encrypyt this later!!!!!!!!!!!!!!!
    type: String,
    required: true,
  },
  //a list of beers, maintained for each user
  beerCollection: [
      {
        picture: {
        //name of a picture that we could then grab from local files? Or possibly a url?
        type: String,
      },
      name: {
        //name of the beer
        type: String,
        required: true,
      },
      beerStyle: {
        //Beer Style (i.e., Pilsner, IPA, Heff, etc.)
        type: String,
        default: "",
      },
      abv: {
        //Alcohol by Volume (abv)
        type: Number,
      },
      beerCategory: {
        //"North American Beers", "German Beers", etc. Designated by API's categories
        type: String,
        default: "",
      },
      shortDesc: {
        //Excerpt of Description (full description available on API)
        type: String,
        default: "",
      }
    }
  ]
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
