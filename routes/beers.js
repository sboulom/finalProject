const router = require("express").Router();
let Beer = require("../models/beer");
// const db = require("../models");

// router.get("/", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.Beer.find({
//     title: { $regex: new RegExp(req.query.q, "i") },
//   })
//     .then((beers) => res.json(beers))
//     .catch((err) => res.status(422).end());
// });

router.route("/").get((req, res) => {
  Beer.find()
    .then((beers) => res.json(beers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const newBeer = new Beer({ name });
  newBeer
    .save()
    .then(() => res.json("BeerTest added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
