const mongoose = require('mongoose');
const Log = require('./models/logs');
require('dotenv').config() 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

const logs = [
  {
    title: 'First Log',
    entry: 'Today was a good day.',
    shipIsBroken: false,
  },
  {
    title: 'Second Log',
    entry: 'Encountered an issue with the engine.',
    shipIsBroken: true,
  },
];

Log.insertMany(logs)
  .then(() => {
    console.log('Data seeded');
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
