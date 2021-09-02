const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

/*maps and object from given data that updates the critic info. 
used in reviewWithCriticDetails to add the critic info to the updated review*/
const criticDetails = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

//update the previous review with a new score and new review text and add critic details
function reviewWithCriticDetails(reviewId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .first()
    .then(criticDetails);
}

//looks for a review that matches the request reviewId param and returns the data. used in middleware
function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

//take data from new review and id of review being changed, find that review by its id and update it
function update(newReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: newReview.review_id })
    .update(newReview);
}

//use del method to destroy any review record that matches the requestes reviewId param
function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  reviewWithCriticDetails,
  read,
  update,
  destroy,
};
