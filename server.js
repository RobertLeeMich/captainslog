require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();


app.engine('jsx', jsx.create());
app.set('views', './views');
app.set('view engine', 'jsx');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// app.use(express.static('public'));

//Index

//New
app.get('/logs/new', (req, res) => {
  res.send('New');
});


//Delete

//Update

//Create

//Edit

//Show
app.get('/flights/:id', async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  const id = req.params.id
  res.render('flights/Show', { flight ,id });
});

//Post
app.post('/flights/:id/destinations', async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  flight.destinations.push(req.body);
  await flight.save();
  res.redirect(`/flights/${req.params.id}`);
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
