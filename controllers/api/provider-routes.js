const router = require('express').Router();
const { Provider } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const providerData = await Provider.create(req.body);
        res.status(200).json(providerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
