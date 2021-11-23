# Movie API

## Description
This API provids users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.  
User authentication is handled using passport. Login requests use basic http authentication. Subsequent requests use JWT authentication. Anonymous users are only able to register a new user. Registered users have full access to the API after logging in.

## How to use
This app is hosted using the Heroku PaaS service at [https://sleepy-sierra-86141.herokuapp.com/](https://sleepy-sierra-86141.herokuapp.com/).

## Endpoints
See the [documentation](https://rcarpus-movie-api.herokuapp.com/documentation.html) page for a full table describing the API endpoints.

## Dependencies/libraries/technologies used
### Node modules
HTTP, URL, FS
### Node packages
body-parser ^1.19.0
express ^4.17.1
mongoose ^6.0.13
morgan ^1.10.0
uuid ^8.3.2
passport ^0.5.0
passport-jwt ^4.0.0
passport-local ^1.0.0

## Browser support
No cross browser testing has been performed.

## Credit
This project was built by Ryan Carpus following the general instructions and guidelines within [CareerFoundry](https://careerfoundry.com/)'s web development immersion course.
