var express = require('express');
var router = express.Router();
const { Movie } = require('../models/Movie');
const { Genre } = require('../models/Genre');

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


router.post('/', async (req, res) => {
   const {name, year, actors, genre, image, video} = req.body;
   const movie = new Movie({name, year, actors, genre, image, video});
   try {
       const document = await movie.save();
       res.status(200).send(document);
   } catch (e) {
        res.status(400).send(e);
   }
});

module.exports = router;
