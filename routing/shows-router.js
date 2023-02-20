const express = require("express");
const showsRouter = express.Router();
const { Show } = require("../models/index");
const {sequelize} = require('../db'); // adding sequelize due to usage in where clause of genre search

showsRouter.use(express.json());


showsRouter.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json( shows );
})

showsRouter.get('/id/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
})

showsRouter.get('/genre/:genre', async (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const shows = await Show.findAll({
        where: sequelize.where(
          sequelize.fn('lower', sequelize.col('genre')),
          genre
        )
      });
    res.json(shows);
});



module.exports = showsRouter;