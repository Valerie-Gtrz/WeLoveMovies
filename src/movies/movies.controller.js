const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//=========validation middleware=========//

//check if movie id exists, if it does, mount onto locals object
async function movieExists(req, res, next) {
  const foundMovie = await moviesService.read(req.params.movieId);
  if (foundMovie) {
    res.locals.foundMovie = foundMovie;
    return next();
  } else {
    return next({
      status: 404,
      message: "Movie cannot be found.",
    });
  }
}

//==========end middleware==============//

//for GET request to path ("/movies") list all movies
//if a query string of is showing = true exists in the request, show only movies now showing
async function list(req, res) {
  if (req.query.is_showing) {
    res.send({ data: await moviesService.nowShowing() });
  } else {
    res.send({ data: await moviesService.list() });
  }
}

//GET request to path ("/:movieId") gets info for one particular movie by id
async function read(req, res) {
  res.send({ data: res.locals.foundMovie });
}

//GET request to path ("/:movieId/theaters") 
async function theatresShowingMovie(req, res) {
  const data = await moviesService.theatersShowingMovie(
    res.locals.foundMovie.movie_id
  );
  res.send({ data });
}

//GET request to path ("/:movieId/reviews")
async function reviewsForMovie(req, res) {
  const data = await moviesService.reviewsForMovie(
    res.locals.foundMovie.movie_id
  );
  res.send({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  theatresShowingMovie: [asyncErrorBoundary(movieExists), theatresShowingMovie],
  reviewsForMovie: [movieExists, reviewsForMovie],
};
