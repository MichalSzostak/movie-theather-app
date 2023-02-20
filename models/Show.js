const db = require('../db');

let Show = db.sequelize.define('show', {
    title: db.Sequelize.STRING,
    description: db.Sequelize.STRING,
    genre: db.Sequelize.STRING,
});

module.exports = Show;
