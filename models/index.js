// import models
const Orders = require('.orders.js');
const Providers = require('.providers.js');
const Users = require('.user.js');

Users.hasMany(Orders, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

Orders.belongsTo(Users, {
    foreignKey: 'orderNumber'
});

module.exporets = {
    Orders,
    Providers,
    Users,
};