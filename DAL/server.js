const express = require('express');
const app = express();
const port = 3000;
const {User, Show, UserShow} = require('./models/index');
const {sequelize} = require('./db');

const nunjucks = require('nunjucks');
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
nunjucks.configure(__dirname + '/views', { express: app });


// app.get('/', async (req, res) => {
//     const shows = await Show.findAll();
//     res.render('index', {shows} );
// })



app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
})

app.get('/users/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const shows = await user.getShows({
        through: {
            where: {
            watched: true
            }
        }
    });
    res.json(shows);
})

app.get('/shows', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
})

app.get('/shows/id/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
})

app.get('/shows/genre/:genre', async (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const shows = await Show.findAll({
        where: sequelize.where(
          sequelize.fn('lower', sequelize.col('genre')),
          genre
        )
      });
    res.json(shows);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
