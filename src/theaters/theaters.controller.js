/*GET /movies/:movieId/theaters
Update your route so that it responds to the following request:

GET /movies/:movieId/theaters
This route should return all the theaters where the movie is playing. This means you will need to check the movies_theaters table.

The response from the server for a request to /movies/1/theaters should look like the following.

{
  "data": [
    {
      "theater_id": 2,
      "name": "Hollywood Theatre",
      "address_line_1": "4122 NE Sandy Blvd.",
      "address_line_2": "",
      "city": "Portland",
      "state": "OR",
      "zip": "97212",
      "created_at": "2021-02-23T20:48:13.342Z",
      "updated_at": "2021-02-23T20:48:13.342Z",
      "is_showing": true,
      "movie_id": 1
    }
    // ...
  ]
} */