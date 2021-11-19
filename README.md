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
| Return data for a single movie by title to the user | /movies/\[title\] | GET | None | A JSON object holding data about a single movie, containing an ID, title, description, genre, director, image URL, and flag for is-featured  <br>example:<br>{<br>"\_id": 1,  <br>"title": "The Lion King",  <br>"description": "Animated lions perform Hamlet",  <br>"genre": {  <br>"\_id" : 4,  <br>"name" : "animated",  <br>"description" : "movies made by drawing lots of pictures and then talking on top of them"  <br>}  <br>"director": {  <br>"\_id" : 2,  <br>"name" : "Rob Minkoff",  <br>"bio" : "Robert Ralph Minkoff is an American filmmaker. He is known for co-directing the Academy Award-winning Disney animated feature The Lion King, along with directing Stuart Little, Stuart Little 2, The Haunted Mansion, The Forbidden Kingdom, and Mr. Peabody & Sherman.",  <br>"birthYear" : 1962  <br>}  <br>"imageUrl": "theLionKing.png",  <br>"featured": true;  <br>} |
| Return information about a genre by name | /genres/\[genre\] | GET | None | A JSON object holding a description of the requested genre<br>example:<br>{<br>"\_id": 3,  <br>"name": "horror",  <br>"description": "Movies that make you scared." <br>} |
| Return data about a director by name | /directors/\[name\] | GET | None | A JSON object holding data about about the requested director (id, bio, birth year, death year if dead) <br> example:  <br>{<br>"\_id" : 6,<br>"name": "Tetsuya Nomura"<br>"bio": "Tetsuya Nomura is a Japanese video game artist, designer and director working for Square Enix. He designed characters for the Final Fantasy series, debuting with Final Fantasy VI and continuing with various later installments."<br>"birth-year": 1970<br>} |
| Allow new users to register | /users/register | POST | A JSON object holding data for a new user (email, username) example:  <br>{  <br>"email": "johndoe@gmail.com",  <br>"username": "johndoe"  <br>} | A JSON object holding data for the new user (id, email, username)  <br>example:  <br>{<br> "\_id": "23",<br>"email": "johndoe@gmail.com",  <br>"username": "johndoe"  <br>}  |
| Allow users to update their username | /users/\[email\]/\[username\] | PUT | None |A text message indicating the email/username combination that was updated  <br>example:  <br>"New username for email address johndoe@gmail.com: johnnydee" |
| Allow users to add a movie to their list of favorites | /users/\[username\]/<br>favorites/add/\[title\] | PUT | None | A text message indicating the movie that was added to the user's favorites  <br>example:  <br>"Movie: The Lion King was added to favorites for user: johnnydee"
| Allow users to remove a movie from their list of favorites | /users/\[username\]/<br>favorites/remove/\[title\] | PUT | None | A text message indicating the movie that was removed from the user's favorites  <br>example:  <br>"Movie: The Lion King was removed from favorites for user: johnnydee" |
|Allow existing users to deregister | /users/deregister/<br>\[username\] | DELETE | None | A text message indicating that a user email was removed  <br>example:  <br>"User account has been removed"|

## Dependencies/libraries/technologies used
### Node modules
HTTP, URL, FS
### Database
MongoDB
### Node packages
body-parser ^1.19.0
express ^4.17.1
morgan ^1.10.0
uuid ^8.3.2

## Browser support
No cross browser testing has been performed.

## Credit
This project was built by Ryan Carpus following the general instructions and guidelines within [CareerFoundry](https://careerfoundry.com/)'s web development immersion course.
