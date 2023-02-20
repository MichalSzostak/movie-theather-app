const db = require('../db');

const User = require('./User');
const Show = require('./Show');
const UserShow = require('./UserShow');

User.belongsToMany(Show, {through: UserShow});
Show.belongsToMany(User, {through: UserShow});

module.exports = {
    User,
    Show,
    UserShow
}
