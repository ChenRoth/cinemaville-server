const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: String
});

export const Genre = mongoose.model('genre', genreSchema);