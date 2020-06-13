const router = require('express').Router()
const db = require('../models')
const passport = require('passport')
// router.get("/", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.Beer.find({
//     title: { $regex: new RegExp(req.query.q, "i") },
//   })
//     .then((beers) => res.json(beers))
//     .catch((err) => res.status(422).end());
// });
// Register User
router.post('/register', function (req, res) {
  var newUser = new db.User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })

  db.User.createUser(newUser, function (err, user) {
    if (err) throw err
    res.send(user).end()
  })
})
// Endpoint to login
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.send(req.user)
})

// Endpoint to get current user
router.get('/user', function (req, res) {
  res.send(req.user)
})

// Endpoint to logout
router.get('/logout', function (req, res) {
  req.logout()
  res.send(null)
})

router.route('/').get((req, res) => {
  db.Beer.find()
    .then((beers) => res.json(beers))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const newBeer = new db.Beer({name})
  newBeer
    .save()
    .then(() => res.json('BeerTest added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.get('/beers', (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Beer.find({
    name: {$regex: new RegExp(req.query.q, 'i')},
  })
    .then((beers) => res.json(beers))
    .catch((err) => res.status(422).end())
})

router.get("/userdata", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  // console.log(res)
  
  db.User.find({
    username: req.query.q
  })
    .then(userdata => res.json(userdata))
    .catch(err => res.status(422).end());
});

router.get("/user", (req, res) => {
  
})

module.exports = router;

