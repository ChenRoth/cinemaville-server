// run this using `mongo cinemaville populate-genres.js`
db.genres.insertMany([
    {
        name: 'action'
    },
    {
        name: 'animation',
    },
    {
        name: 'drama'
    },
    {
        name: 'comedy',
    },
    {
        name: 'horror'
    }
])