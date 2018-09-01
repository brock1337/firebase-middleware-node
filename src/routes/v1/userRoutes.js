const router = require('express').Router();

router.post('/new', (req, res) => {
  res.send('Creating new User...');
});

// Route - /auth/user/:id
router.get('/:id', (req, res) => {
  res.send(`[GET] User --> ${req.params.id}`);
});

module.exports = router;
