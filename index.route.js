const express = require('express');
const userRoutes = require('./server/api/user/user.route');
const authRoutes = require('./server/api/auth/auth.route');


const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/users', userRoutes);
router.use('/auth', authRoutes);


module.exports = router;
