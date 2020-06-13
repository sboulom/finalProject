const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const beersRouter = require("./routes/beers");
const apiRoutes = require("./routes/apiRoutes");
const session = require('express-session');
const passport = require('passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbeers", 
  { useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/beers", beersRouter);
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT: ${PORT}!`);
});
