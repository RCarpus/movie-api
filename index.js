// Import express and morgan into my app
const express = require('express'),
  morgan = require('morgan');
const app = express();

/*
A list of movie objects to be parsed as JSON with the format:
{
  title: title, // string
  year: year, // int
  director: director, // list of strings
  boxOffice: boxOffice // int or undefined
}
*/
let movies = [
  {
    title: 'The Lion King',
    year: 1994,
    director: ['Rob Minkoff', 'Roger Allers'],
    boxOffice: 968500000
  },
  {
    title: 'Thankskilling',
    year: 2008,
    director: ['Jordan Downey'],
    boxOffice: undefined
  },
  {
    title: 'The Lego Movie',
    year: 2014,
    director: ['Phil Lord', 'Chris Miller'],
    boxOffice: 468100000
  },
  {
    title: 'Baby\'s Day Out',
    year: 1994,
    director: ['Patrick Read Johnson'],
    boxOffice: 30000000
  },
  {
    title: 'Final Fantasy VII: Advent Children',
    year: 2005,
    director: ['Tetsuya Nomura'],
    boxOffice: undefined
  },
  {
    title: 'Pokemon: The First Movie',
    year: 1999,
    director: ['Kunihiko Yuyama'],
    boxOffice: 172700000
  },
  {
    title: 'Birdemic',
    year: 2010,
    director: ['James Nguyen'],
    boxOffice: undefined
  },
  {
    title: 'Office Space',
    year: 1999,
    director: ['Mike Judge'],
    boxOffice: undefined
  },
  {
    title: 'South Park: Bigger Longer and Uncut',
    year: 1999,
    director: ['Trey Parker'],
    boxOffice: 83100000}
];

// logging middleware
app.use(morgan('common'));
// make all files in /public available
app.use(express.static('public'));

// endpoint to send movies list as JSON object
app.get('/movies', (req, res) => {
  res.json(movies);
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