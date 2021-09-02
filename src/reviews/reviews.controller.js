const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//=========validation middleware=========//

//check to see if the reviews exists by checking the request reviewId parameter against the database info
//if it does, mount the review data onto the res.locals object
async function reviewExists(req, res, next) {
  //get reviewid from the query parameters
  const { reviewId } = req.params;
  const foundReview = await reviewsService.read(reviewId);
  if (foundReview) {
    res.locals.foundReview = foundReview;
    return next();
  }
  return next({ status: 404, message: "Review cannot be found." });
}

//==========end middleware==============//

/*for PUT request to path ("/reviews/:reviewId") update the previous 
review with a new score and new review text and add critic details*/
async function update(req, res) {
  //object with request body and review id matching the req params
  const newReview = {
    ...req.body.data,
    review_id: res.locals.foundReview.review_id,
  };
  await reviewsService.update(newReview);
  const reviewAndCritic = await reviewsService.reviewWithCriticDetails(
    res.locals.foundReview.review_id
  );

  res.json({ data: reviewAndCritic });
}

//DELETE request to reviews/:reviewId that destroys a review whose review_id matches the reviewId param
async function destroy(req, res) {
  await reviewsService.destroy(res.locals.foundReview.review_id);
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
