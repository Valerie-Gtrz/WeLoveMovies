const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

//writing the knex sql queries here!!!

//lists all movies
function list() {
  return knex("movies").select("*");
}

//used in validation middleware. gets info for one particular movie by id
function read(movieId) {
  return knex("movies")
    .select("*")
    .where({ movie_id: Number(movieId) })
    .first();
}

//gets theaters showing a particular movie
function theatersShowingMovie(movieId) {
  return knex("movies_theaters as mt")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("*")
    .where({ movie_id: movieId, is_showing: true });
}

//for GET /movies (movies now showing)
function nowShowing() {
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .select("movies.*")
    .where({ "movies_theaters.is_showing": true })
    .groupBy("movies.movie_id");
}

//get reviews for particular movie and adds critic details
function reviewsForMovie(movieId) {
  return knex("movies")
    .join("reviews", "reviews.movie_id", "movies.movie_id")
    .join("critics", "critics.critic_id", "reviews.critic_id")
    .select("*")
    .where({ "reviews.movie_id": movieId })
    .then((reviews) => {
      const criticDetails = [];
      reviews.forEach((review) => {
        const newCritic = addDetails(review);
        criticDetails.push(newCritic);
      });
      return criticDetails;
    });
}

const addDetails = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

module.exports = {
  list,
  theatersShowingMovie,
  read,
  nowShowing,
  reviewsForMovie,
};
