const { User } = require('../models');
const bcrypt = require('bcryptjs');

const userData = [
  {
    username: 'customer1',
    email: 'customer1@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'customer',
    address: '123 Main St',
    payment_info: '1234-5678-9012-3456',
  },
  {
    username: 'courier1',
    email: 'courier1@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'courier',
    address: '456 Elm St',
    payment_info: '1234-5678-9012-3456',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
};

module.exports = seedUsers;
