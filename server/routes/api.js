const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// mongoDB
const mongojs = require('mongojs');

const DB_USERNAME = 'root';
const DB_PASSWORD = 'root';
const COLLECTION_NAME = 'test1';

let db = mongojs(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds259268.mlab.com:59268/meandb`, [`${COLLECTION_NAME}`]);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works from express !!');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/tasks', function(req, res, next) {
  db.test1.find(function(err, test1){
      if(err){
        res.send(err);
      }
      res.json(test1);
  });
});

module.exports = router;