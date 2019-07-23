var express = require('express');
var router = express.Router();
const { Movie } = require('../models/Movie');

router.get('/', async function (req, res, next) {
    const movies = await Movie.find().exec();
    res.send(movies);
});

module.exports = router;
