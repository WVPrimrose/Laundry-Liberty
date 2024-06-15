const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/login', async (req, res) => {
    try {
      // Get all users, sorted by name
    //   const userData = await User.findAll({
    //     attributes: { exclude: ['password'] },
    //     order: [['name', 'ASC']],
    //   });
  
    //   // Serialize user data so templates can read it
    //   const users = userData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data into Handlebars.js template
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/signup', async (req, res) => {
    try {
      // Get all users, sorted by name
    //   const userData = await User.findAll({
    //     attributes: { exclude: ['password'] },
    //     order: [['name', 'ASC']],
    //   });
  
    //   // Serialize user data so templates can read it
    //   const users = userData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data into Handlebars.js template
      res.render('signup');
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
