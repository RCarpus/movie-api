# Movie API

## Description
This API provids users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.  
User authentication is handled using passport. Login requests use basic http authentication. Subsequent requests use JWT authentication. Anonymous users are only able to register a new user. Registered users have full access to the API after logging in.

## How to run
Download and unzip the project files. Run the command `node index.js` within the root directory of the project to start the server. This currently requires a local installation of the mongo database used with the API.

## Endpoints
To view a table containing instructions for using each endpoint, download the [documentation](https://github.com/RCarpus/movie-api/blob/task-9/public/documentation.html) and open in a browser.

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
