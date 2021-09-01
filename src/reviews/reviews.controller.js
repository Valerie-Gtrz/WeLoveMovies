const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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

/*{
  "score": 3,
  "content": "New content..."
}*/
async function update(req, res) {
  const newReview = { ...res.locals.foundReview, ...req.body.data };
  await reviewsService.update(newReview);
  const returnData = await reviewsService.reviewWithCriticDetails(
    res.locals.foundReview.review_id
  );
  res.json({ data: returnData });
}

async function destroy(req, res) {
  await reviewsService.destroy(res.locals.foundReview.review_id);
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
