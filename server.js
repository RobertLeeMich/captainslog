require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jsxViewEngine = require('jsx-view-engine');
const app = express();
const Log = require('./models/logs')
const methodOverride = require('method-override');
const logsController = require('./controllers/logs');



// View engine
app.engine('jsx', jsxViewEngine());
app.set('views', './views');
app.set('view engine', 'jsx');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
});

app.use(methodOverride('_method'))

//Refactoring Code to use controllers/logs.js
app.use('/logs', logsController)

// Listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
});
