var express = require('express');
var router = express.Router();
const { Movie } = require('../models/Movie');

router.get('/', async function (req, res, next) {
    const movies = await Movie.find().select({ name: 1, year: 1, genre: 1, image: 1 }).exec();
    res.send(movies);
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id).exec();
        res.send(movie);
    } catch (e) {
        res.status(404).send('not found');
    }
});


module.exports = router;
