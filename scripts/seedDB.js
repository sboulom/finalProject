const mongoose = require("mongoose");
const db = require("../models");
<<<<<<< HEAD

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbeers");

=======
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbeers"
);
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
// const beerSeed = [
//   {
//     picture: "",
//     name: "nameTest",
//     beerStyle: "beerStyleTest",
//     abv: 30,
//     shortDesc: "shortDescTest",
//     beerCategory: "categoryTest"
//   }
// ];
<<<<<<< HEAD

=======
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
// //seeding beers
// db.Beer.remove({}) //clears the database of all data before seeding
//   .then(() => db.Beer.collection.insertMany(beerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
<<<<<<< HEAD

const userSeed = [
  {
    username: "Alice",
=======
const userSeed = [
  {
    username:"Alice",
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
    password: "wonderland",
    email: "rabbithole@yahoo.com",
    name: "Alice Margatroid",
    beerCollection: [
      {
        picture: "",
        name: "Mad Hatter's Mix",
        beerStyle: "Unusual",
        abv: 40,
        shortDesc: "A very merry un-birthday!",
<<<<<<< HEAD
        beerCategory: "Fizzy",
=======
        beerCategory: "Fizzy"
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
      },
      {
        picture: "",
        name: "Chesire Cat's Concoction",
        beerStyle: "Mysterious",
        abv: 30,
        shortDesc: "Riddles and riddles!",
<<<<<<< HEAD
        beerCategory: "Foamy",
      },
    ],
  },
  {
    username: "Bob",
=======
        beerCategory: "Foamy"
      }
    ]
  },
  {
    username:"Bob",
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
    password: "builder",
    email: "wecanfixit@google.com",
    name: "Bob the Builder",
    beerCollection: [
      {
        picture: "",
        name: "Tom Nook's Tequila",
        beerStyle: "Tanuki",
        abv: 60,
        shortDesc: "Very good, very good!",
<<<<<<< HEAD
        beerCategory: "Real Estate",
=======
        beerCategory: "Real Estate"
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
      },
      {
        picture: "",
        name: "Redd's Razzle Dazzle",
        beerStyle: "Kitsune",
        abv: 45,
        shortDesc: "Thanks, cuz!",
<<<<<<< HEAD
        beerCategory: "Forgery",
      },
    ],
  },
];

//seeding user data
db.UserData.remove({}) //clear database
  .then(() => db.UserData.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
=======
        beerCategory: "Forgery"
      }
    ]
  }
];
//seeding user data
db.UserData.remove({}) //clear database
  .then(() => db.UserData.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
>>>>>>> 18b5129f685105f055f1e3049002f638499eef8c
