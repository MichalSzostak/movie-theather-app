const db = require('../db');

let User = db.sequelize.define('user', {
    username: db.Sequelize.STRING,
    password: db.Sequelize.STRING,
    email: db.Sequelize.STRING,
    firstName: db.Sequelize.STRING

})

module.exports = User;