const router = require('express').Router();
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const providerRoutes = require('./provider-routes');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/providers', providerRoutes);

module.exports = router;
