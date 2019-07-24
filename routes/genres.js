var express = require('express');
var router = express.Router();
const { Genre } = require('../models/Genre');

router.get('/', async function (req, res, next) {
    const genres = await Genre.find().select({ _id: 0 }).exec();
    res.send(genres);
});

module.exports = router;
