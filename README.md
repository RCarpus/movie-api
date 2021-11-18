# Movie API

## Description
This API will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.  
At the moment, this project only includes a few simple endpoints with some basic functinality. The table below indicates the what the endpoing WILL do, not necessarily what it is currently capable of.

## How to run
Download and unzip the project files. Run the command `node index.js` within the root directory of the project to start the server.

## Endpoints
|Business Logic|Endpoint URL|HTTP Method|Request body data format|Response body data format|
| --- | --- | --- | --- | ---| 
| Return a list of ALL movies to the user | /movies | GET | None | A JSON object holding data about all the movies |
| Return data for a single movie by title to the user | /movies/\[title\] | GET | None | A JSON object holding data about a single movie, containing an ID, title, description, genre, director, image URL, and flag for is-featured  <br>example:<br>{<br>"id": 1,<br>"title": "The Lion King",<br>"release-year": 1994,"description": "Animated lions perform Hamlet",<br>"genre": "family",<br>"director": "\['Rob Minkoff', 'Roger Allers'\]",<br>"image-url": "http://movie-api.com/the-lion-king-image",<br>"featured": true;<br>} |
| Return data about a genre by name | /movies/genres/\[genre\] | GET | None | A JSON object holding data about each movie of the requested genre |
| Return data about a director by name | /directors/\[name\] | GET | None | A JSON object holding data about about the requested director (Bio, birth year, death year) <br> example:  <br>{  <br>"name": "Tetsuya Nomura"  <br>"bio": "Tetsuya Nomura is a Japanese video game artist, designer and director working for Square Enix. He designed characters for the Final Fantasy series, debuting with Final Fantasy VI and continuing with various later installments."  <br>"birth-year": 1970  <br>"death-year": undefined  <br>}
| Allow new users to register | /users/register | POST | A JSON object holding data for a new user (email, username) example:  <br>{  <br>"email": "johndoe@gmail.com",  <br>"username": "johndoe"  <br>} | A JSON object holding data for the new user (email, username)  <br>example:  <br>{  <br>"email": "johndoe@gmail.com",  <br>"username": "johndoe"  <br>}  |
| Allow users to update their username | /users/\[email\]/\[username\] | PUT | None |A text message indicating the email/username combination that was updated  <br>example:  <br>"New username for email address johndoe@gmail.com: johnnydee" |
| Allow users to add a movie to their list of favorites | /users/\[username\]/favorites/add/\[title\] | PUT | None | A text message indicating the movie that was added to the user's favorites  <br>example:  <br>"Movie: The Lion King was added to favorites for user: johnnydee"
| Allow users to remove a movie from their list of favorites | /users/\[username\]/favorites/remove/\[title\] | PUT | None | A text message indicating the movie that was removed from the user's favorites  <br>example:  <br>"Movie: The Lion King was removed from favorites for user: johnnydee" |
|Allow existing users to deregister | /users/deregister/\[username\] | DELETE | None | A text message indicating that a user email was removed  <br>example:  <br>"User account has been removed"|

## Dependencies/libraries/technologies used
### Node modules
HTTP, URL, FS
### Node packages
body-parser ^1.19.0
express ^4.17.1
morgan ^1.10.0
uuid ^8.3.2

## Browser support
No cross browser testing has been performed.

## Credit
This project was built by Ryan Carpus following the general instructions and guidelines within [CareerFoundry](https://careerfoundry.com/)'s web development immersion course.
