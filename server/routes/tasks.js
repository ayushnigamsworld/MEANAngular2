const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

router.get('/tasks', function(req, res, next){
    res.send('Task Api');
});

module.exports = router;