//If a request is made to a route that does not exist, the server returns a 404 error.
function notFound(req, res, next) {
    next({ status: 404, message: `Path not found: ${req.originalUrl}` });
  }
  
  module.exports = notFound;