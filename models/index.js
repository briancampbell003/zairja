const User = require('./User');
const Verse = require('./Verse');


User.hasMany(Verse, {
    foreignKey: 'user_id',
});

Verse.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Verse };
