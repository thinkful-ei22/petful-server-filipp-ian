'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

const fluffy = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}
const skittles = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'yellow and green cat.',
  name: 'Skittles',
  sex: 'Female',
  age: 2,
  breed: 'tabby',
  story: 'Thrown on the street'
}
const felix = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'siamese',
  name: 'felix',
  sex: 'Female',
  age: 5,
  breed: 'siamese',
  story: 'Thrown on the street'
}
const bowser = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}
const bandit = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'old pug.',
  name: 'bandit',
  sex: 'Male',
  age: 3,
  breed: 'pug',
  story: 'Owner Passed away'
}
const wrigley = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'friendly buddy',
  name: 'wrigley',
  sex: 'Male',
  age: 3,
  breed: 'weiner dog',
  story: 'Owner Passed away'
}

let dogs = [ bowser, bandit, wrigley ];
let cats = [ fluffy, skittles, felix ];

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);


app.get('/api/cat', (req, res, next) => {
  res.json(cats[0])
})

app.get('/api/dog', (req, res, next) => {
  res.json(dogs[0])
})

app.delete('/api/cat', (req, res, next) => {
  cats.shift();
  res.status(204).end();
})

app.delete('/api/dog', (req, res, next) => {
  dogs.shift();
  res.status(204).end();
})



function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
