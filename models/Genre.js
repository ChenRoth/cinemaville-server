const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: String
});

const Genre = mongoose.model('genre', genreSchema);
module.exports = {
    Genre,
}