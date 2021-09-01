const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const foundMovie = await moviesService.read(req.params.movieId);
  console.log("found movie", foundMovie);
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

//movies.list  ("/movies")
async function list(req, res) {
  if (req.query.is_showing) {
    res.send({ data: await moviesService.nowShowing() });
  } else {
    res.send({ data: await moviesService.list() });
  }
}

//movies.read ("/:movieId")
async function read(req, res) {
  res.send({ data: res.locals.foundMovie });
}

//movies.theatresShowingMovie  ("/:movieId/theaters")
async function theatresShowingMovie(req, res) {
  const data = await moviesService.listTheatersShowingMovie(
    res.locals.foundMovie.movie_id
  );
  res.send({ data });
}

//movies.reviewsForMovie  ("/:movieId/reviews")

async function reviewsForMovie(req, res) {
  const data = await moviesService.listReviewsForMovie(
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
