// Import express and morgan into my app
const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

/*
A list of movie objects to be parsed as JSON with the format:
{
  title: title, // string
  genre: genre, //string
  year: year, // int
  director: director, // list of strings
  boxOffice: boxOffice // int or undefined
}
*/
let movies = [
  {
    title: 'The Lion King',
    genre: 'family',
    year: 1994,
    director: ['Rob Minkoff', 'Roger Allers'],
    boxOffice: 968500000
  },
  {
    title: 'Thankskilling',
    genre: 'horror',
    year: 2008,
    director: ['Jordan Downey'],
    boxOffice: undefined
  },
  {
    title: 'The Lego Movie',
    genre: 'family',
    year: 2014,
    director: ['Phil Lord', 'Chris Miller'],
    boxOffice: 468100000
  },
  {
    title: 'Baby\'s Day Out',
    genre: 'drama',
    year: 1994,
    director: ['Patrick Read Johnson'],
    boxOffice: 30000000
  },
  {
    title: 'Final Fantasy VII: Advent Children',
    genre: 'action',
    year: 2005,
    director: ['Tetsuya Nomura'],
    boxOffice: undefined
  },
  {
    title: 'Pokemon: The First Movie',
    genre: 'adventure',
    year: 1999,
    director: ['Kunihiko Yuyama'],
    boxOffice: 172700000
  },
  {
    title: 'Birdemic',
    genre: 'horror',
    year: 2010,
    director: ['James Nguyen'],
    boxOffice: undefined
  },
  {
    title: 'Office Space',
    genre: 'comedy',
    year: 1999,
    director: ['Mike Judge'],
    boxOffice: undefined
  },
  {
    title: 'South Park: Bigger Longer and Uncut',
    genre: 'comedy',
    year: 1999,
    director: ['Trey Parker'],
    boxOffice: 83100000}
];

// Dummy user data
let users = [
  {
    email: 'ryancarpus@gmail.com',
    username: 'Gimpurr'
  },
  {
    email: 'rcarpus@umich.edu',
    username: 'rcarpus'
  }
];


// logging middleware
app.use(morgan('common'));
// make all files in /public available
app.use(express.static('public'));

// endpoint to send movies list as JSON object
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

// endpoint to search for a movie by title
app.get('/movies/:title', (req, res) => {
  let movieTitle = req.params.title;
  movies.forEach((movie) => {
    if (movie.title === movieTitle) {
      res.status(200).json(movie);
    }
  });
  res.status(404).send('Movie not found');
});

// endpoint to search for all movies in a genre
app.get('/movies/genres/:genre', (req, res) => {
  let movieGenre = req.params.genre;
  let responseObject = [];
  movies.forEach((movie) => {
    if (movie.genre === movieGenre) {
      responseObject.push(movie);
    }
  });
  if (responseObject.length > 0) {
    res.status(200).json(responseObject);
  } else {
    res.status(404).send('Genre not found');
  }
});

// endpoint to return info about director by name
app.get('/directors/:name', (req, res) => {
  res.send('Successful GET request returning data on a director');
});

// endpoint to allow new users to register
app.post('/users/register', (req, res) => {
  let newUser = req.body;

  if (!newUser.email || !newUser.username) {
    res.status(400).send('Missing email or username');
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser)
  }
});

//endpoint to allow users to change their username
app.put('/users/:email/:username', (req, res) => {
  let userEmail = req.params.email;
  let newUsername = req.params.username;
  users.forEach((user) => {
    if (user.email === userEmail) {
      user.username = newUsername;
      res.status(200).send(`New username for email address ${user.email}: ${user.username}`);
    }
  });
  res.status(404).send('A user account for the provided email address does not exist.');
});

// endpoint to allow users to add a movie to their favorites list
app.put('/users/:username/favorites/add/:title', (req, res) => {
  res.send(`Added ${req.params.title} to favorite's list for user: ${req.params.username}`);
});

// endpoint to allow users to remove a movie to their favorites list
app.put('/users/:username/favorites/remove/:title', (req, res) => {
  res.send(`Removed ${req.params.title} from favorite's list for user: ${req.params.username}`);
});

// endpoint to allow users to deregister
app.delete('/users/deregister/:username', (req, res) => {
  res.send(`User account has been removed`);
});

// endpoint for home page
app.get('/', (req, res) => {
  let responseText = 'Nothing to see here. You\'d best move along now.';
  res.send(responseText);
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('I am afraid something has gone horribly wrong.');
});

// open server
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});