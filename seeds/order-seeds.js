const { Order } = require('../models');

const orderData = [
  {
    user_id: 1,
    service_type: 'Wash & Fold',
    pick_up_time: new Date(),
    delivery_time: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    status: 'Scheduled',
    payment_status: 'Pending',
    provider_id: 2,
  },
];

const seedOrders = async () => {
  await Order.bulkCreate(orderData);
};

module.exports = seedOrders;
