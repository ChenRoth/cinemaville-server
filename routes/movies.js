var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('list of movies')
});

module.exports = router;
