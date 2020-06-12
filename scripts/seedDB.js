const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbeers"
);

const beerSeed = [
  {
    picture: "",
    name: "nameTest",
    beerStyle: "beerStyleTest",
    abv: 30,
    shortDesc: "shortDescTest",
    beerCategory: "categoryTest"
  }
];

//seeding beers
db.Beer.remove({}) //clears the database of all data before seeding
  .then(() => db.Beer.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userDataSeed = [
  {
    username:"doofenschmirtz",
    password: "perryplatypus",
    beerCollection: [
      {
        picture: "",
        name: "Phineas A",
        beerStyle: "beerStyleTest",
        abv: 30,
        shortDesc: "shortDescTest",
        beerCategory: "categoryTest"
      },
      {
        picture: "",
        name: "Ferb B",
        beerStyle: "beerStyleTest",
        abv: 30,
        shortDesc: "shortDescTest",
        beerCategory: "categoryTest"
      },
    ]
  }
];

//seeding user data
db.UserData.remove({}) //clear database
  .then(() => db.UserData.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
