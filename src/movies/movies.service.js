const knex = require("../db/connection");

//writing the queries here!!!

function list() {
  return knex("movies").select("*");
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: Number(movieId) }).first();
}

function listTheatersShowingMovie(movieId){
    return knex("movies_theaters as mt")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("*")
    .where({ movie_id: movieId, is_showing: true });
}

function nowShowing() {
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .select("movies.*")
    .where({ "movies_theaters.is_showing": true })
    .groupBy("movies.movie_id");
}

module.exports = {
  list,
  listTheatersShowingMovie,
  read,
  nowShowing,
};
