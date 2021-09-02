# Project Description: WeLoveMovies
### Set up a database and build out specific routes so that users can gain access to data about movies, theaters, and reviews.

[GitHub](http://github.com)

## Project Objectives

- Install and use common middleware packages
- Receive requests through routes
- Run tests from the command line
- Access relevant information through route and query parameters
- Create an error handler for the case where a route doesn't exist
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to your database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tool
- Deploy the backend server to a cloud service

## General tasks

- The app.js file and server.js file are correctly configured, with the app.js file exporting the application created from Express.
- Use the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that doesn't exist, the server returns a 404 error.
- If a request is made to a route that exists but the HTTP method is wrong, the server returns a 405 error.
- All routes respond with the appropriate status code and use a data key in the response.

## Screenshots

###  Home Page
This page lists all movies currently showing in theaters. Clicking on the image or title of the film routes the user to that movie's page with more information about the movie including reviews and showtimes.

![Home Page](https://64.media.tumblr.com/df8829d8006286db19e3d044bd7db78d/a7a5b69ee16d6a28-d5/s2048x3072/07a1402d39d1cf87f02595c60d8445833818e14c.png)
### All Movies Page
Clicking "All Movies" in the header will route the user to a page that lists all the movies currently showing along with a short description of each film. Clicking the "See More" button next to a title will route the user to that movie's information page.

![All Movies Page](https://64.media.tumblr.com/ce8de7ca4ac0bf6f3e7f4e3f9ad5f22a/f06d2f6ec2d83a10-26/s2048x3072/ec081e73cac2dbb8de4c4873fdd26d67a5e96522.png)
### All Theaters Page
Clicking "All Theaters" in the header will route the user to a page that lists all theaters and a thumbnail images of the movies currently showing at each theater. Clicking a movie thumbnail will route the user to that movie's information page.

![All Theaters Page](https://64.media.tumblr.com/de51acd369a7c869450cd677f51845ff/8549660ba5f9a434-79/s2048x3072/4fed1e9d0ef26c38943893ab96fc714301f517bb.png)
### Movie Information Page
This page includes a synopsis of the film, its runtime, rating, average review, a list of theaters showing the film and a list of the reviews for the film.

![Movie Information Page](https://64.media.tumblr.com/3ee4bfcf475aa13c2eba83ed56d8a872/0f0fc6d854fa106a-b5/s2048x3072/86b46bbd49a8974d8fc9b0b12cdac5d3168233c6.png)
### Movie Information Page - Reviews
Scrolling down on a movie information page reveals a list of reviews submitted by critics. These reviews include critic information, a review body and rating, as well as a 'Destroy Review' button. A review can be deleted by clicking the 'Destroy Review' button.

![Movie Information Page - Reviews](https://64.media.tumblr.com/87ab7ec4a7203106648e8459145c5ad7/4103c9c8a318c738-77/s2048x3072/1139cd325c52dacada7a6acdfc761ed0c2bac966.png)


## Technology

- NodeJS
- Express
- Knex
- SQL
- Postman

## Skills

- Complex API routing including managing migrations and building complex routes
- Database seeding and migrations
- Creating connections to a database with Knex
- Writing database queries to complete CRUD routes in an Express server
