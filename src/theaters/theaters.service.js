const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

//writing the knex sql queries here!!!

//gets a list of all theaters and uses the reduce method to show all movies playing at each theater
function list() {
  return knex("theaters")
    .join("movies_theaters as mt", "mt.theater_id", "theaters.theater_id")
    .join("movies", "movies.movie_id", "mt.movie_id")
    .select("*")
    .then(reduceMovies);
}


/*reduce method matches the theater id to get the movies playing at 
each theatre and adds it to the 'movies' key in the returned theater info*/
const reduceMovies = reduceProperties("theater_id", {
    movie_id: ["movies", null, "movie_id"],
    title: ["movies", null, "title"],
    runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
    rating: ["movies", null, "rating"],
    description: ["movies", null, "description"],
    image_url: ["movies", null, "image_url"],
    is_showing: ["movies", null, "is_showing"],
  });

module.exports = { list };
