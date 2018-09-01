const router = require('express').Router();

// Route - /v1
router.get('/', (req, res) => {
  res.send('Navigated to --> Base API v1 Router');
});

// Route - /v1/auth/
router.use('/auth', require('./authRoutes'));

module.exports = router;
