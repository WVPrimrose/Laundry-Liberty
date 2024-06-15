const { Provider } = require('../models');

const providerData = [
  {
    name: 'John Doe',
    vehicle_details: 'Van',
    location: { type: 'Point', coordinates: [40.7128, -74.0060] },
    availability: 'Available',
    ratings: 4.5,
  },
];

const seedProviders = async () => {
  await Provider.bulkCreate(providerData);
};

module.exports = seedProviders;
