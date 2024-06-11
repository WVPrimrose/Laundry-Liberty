const User = require('./user');
const Order = require('./orders');

User.hasMany(Order, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Order };