const mongoose = require('mongoose');
const {Genre} = require('./Genre');

const movieSchema = mongoose.Schema({
    name: {type: String, required: true},
    genre: {
        type: String,
        required: true,
        validate: {
            async validator(genreName) {
                const genres = await Genre.find().exec();
                return genres.some(genre => genre.name === genreName);

            },
            message: props => `${props.value} is an unknown genre`,
        }
    },
    actors: {type: [String], required: true},
    year: {type: Number, min: 1850, required: true},
    image: {type: String, required: true},
    video: {type: String, required: true}
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = {
    Movie,
}