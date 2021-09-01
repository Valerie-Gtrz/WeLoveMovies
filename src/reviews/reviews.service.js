const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const criticDetails = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

function reviewWithCriticDetails(reviewId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .first()
    .then((result) => {
      const newReview = criticDetails(result);
      return newReview;
    });
}

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function update(newReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: newReview.review_id })
    .update(newReview);
}

function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  reviewWithCriticDetails,
  read,
  update,
  destroy,
};
