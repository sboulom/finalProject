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
  const picture = req.body.picture;
  const name = req.body.name;
  const beerStyle = req.body.beerStyle;
  const abv = Number(req.body.abv);
  const beerCategory = req.body.beerCategory;
  const shortDesc = req.body.shortDesc;

  const newBeer = new Beer({
    picture,
    name,
    beerStyle,
    abv,
    beerCategory,
    shortDesc,
  });
  newBeer
    .save()
    .then(() => res.json("Beer card added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Beer.findById(req.params.id)
    .then((beer) => res.json(beer))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
