const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedOrders = require('./order-seeds');
const seedProviders = require('./provider-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedProviders();
  await seedOrders();
  process.exit(0);
};

seedAll();
