const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    actors: [String],
    year: { type: Number, min: 1850 },
    image: String,
    video: String,
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = {
    Movie,
}