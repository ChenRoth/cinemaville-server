var express = require('express');
var router = express.Router();
const { Movie } = require('../models/Movie');

router.get('/', async function (req, res, next) {
    const movies = await Movie.find().select({ name: 1, year: 1, genre: 1, image: 1 }).exec();
    res.send(movies);
});

module.exports = router;
