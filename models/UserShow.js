const db = require('../db');

let UserShow = db.sequelize.define('user_show', {
    rating: db.Sequelize.INTEGER,
    watched: db.Sequelize.BOOLEAN
});

module.exports = UserShow;