const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3000;

const distDir = path.join(__dirname, '../client/dist');

app.use(express.static(distDir));
app.use(bodyParser.json());

app.get('/bookings', (req, res) => {
  console.log(req.query);
  const listingIdObj = req.query;
  db.getBookings(listingIdObj, res);
  // res.end();
});

app.listen(port, () => console.log('Listening on Port:', port));