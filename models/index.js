const User = require('./user');
const Order = require('./orders');
const Provider = require('./providers'); 

User.hasMany(Order, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});


User.hasMany(Order, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Order, Provider }; 
