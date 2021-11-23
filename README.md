# Movie API

## Description
This API provids users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.  

## Hosting
The source code for the API is hosted using the Heroku PaaS service at [https://rcarpus-movie-api.herokuapp.com/](https://rcarpus-movie-api.herokuapp.com/).
The database is hosted with MongoDB Atlus.

## User permissions
Until a user is registered, they only have access to the documentation page and the home page which directs the user to the home page. They can also register a user using the /users/register POST endpoint as described in the [documentation](https://rcarpus-movie-api.herokuapp.com/documentation.html).  
After registering, users must log in using the /login POST endpoint.
A logged in user has full access to the API, including read, write, update, and delete access at as applicable to a given endpoint.

## Endpoints
See the [documentation](https://rcarpus-movie-api.herokuapp.com/documentation.html) page for a full table describing the API endpoints.

## Security
Authentication is handled with the passport, passport-local, and passport-jwt libraries.
Passwords are hashed using bcrypt prior to saving on the server or comparing to an existing password on the server.
Login requests are made using simple http authentication. The succesful login request will return a JWT which will be required for token-based authorization at each endpoint. The JWT is valid for 7 days.

## Dependencies/libraries/technologies used
### Node modules
HTTP, URL, FS
### Node packages
| package | version |
| --- | --- |
|  bcrypt | ^5.0.1 |
| body-parser | ^1.19.0 |
| cors | ^2.8.5 |
| express | ^4.17.1 |
| express-validator | ^6.13.0 |
| jsonwebtoken | ^8.5.1 |
| mongoose | ^6.0.13 |
| morgan | ^1.10.0 |
| passport | ^0.5.0 |
| passport-jwt | ^4.0.0 |
| passport-local | ^1.0.0 |
| uuid | ^8.3.2 |

## Credit
This project was built by Ryan Carpus following the general instructions and guidelines within [CareerFoundry](https://careerfoundry.com/)'s web development immersion course.
