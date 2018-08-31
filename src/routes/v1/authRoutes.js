const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Navigated to --> Base Authentication Router');
});

module.exports = router;
