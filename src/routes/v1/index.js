const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Navigated to --> Base API v1 Router');
});

module.exports = router;
