const router = require('express').Router();

// Route - /auth/user/:id
router.get('/user/:id', (req, res) => {
  res.send(`[GET] User --> ${req.params.id}`);
});

// Create new Custom Token for User
router.get('/token/new', (req, res) => {
  res.send('Requesting new Custom Token...');
});

module.exports = router;
