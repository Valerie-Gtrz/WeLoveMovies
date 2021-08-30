if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

//require cors

const moviesRouter = require("./src/movies/movies.router");
const moviesRouter = require("./src/theatres/theatres.router");
const moviesRouter = require("./src/reviews/reviews.router");



 app.use("/movies", moviesRouter);
 app.use("/theatres", moviesRouter);
 app.use("/reviews", moviesRouter);



module.exports = app;
