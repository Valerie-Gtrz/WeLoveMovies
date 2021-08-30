/*GET /movies/:movieId/reviews
Update your route so that it responds to the following request:

GET /movies/:movieId/reviews
This route should return all the reviews for the movie, including all the critic details added to a critic key of the review.

The response from the server for a request to /movies/1/reviews should look like the following.

{
  "data": [
    {
      "review_id": 1,
      "content": "Lorem markdownum ...",
      "score": 3,
      "created_at": "2021-02-23T20:48:13.315Z",
      "updated_at": "2021-02-23T20:48:13.315Z",
      "critic_id": 1,
      "movie_id": 1,
      "critic": {
        "critic_id": 1,
        "preferred_name": "Chana",
        "surname": "Gibson",
        "organization_name": "Film Frenzy",
        "created_at": "2021-02-23T20:48:13.308Z",
        "updated_at": "2021-02-23T20:48:13.308Z"
      }
    }
    // ...
  ]
} */