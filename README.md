# Movie API

## Description
This API will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.  
At the moment, this project only includes a few simple endpoints.

## How to run
Download and unzip the project files. Run the command `node index.js` within the root directory of the project to start the server.

## Endpoints
| Endpoint | Description |
| -------- | ----------- |
|/|Displays a short textual message|
|/documentation.html|Displays the API documentation|
|/movies|	fetches a JSON object containing data about 10 movies|

## Dependencies/libraries/technologies used
### Node modules
HTTP, URL, FS
### Node packages
body-parser ^1.19.0
express ^4.17.1
morgan ^1.10.0

## Browser support
No cross browser testing has been performed.

## Credit
This project was built by Ryan Carpus following the general instructions and guidelines within [CareerFoundry](https://careerfoundry.com/)'s web development immersion course.
