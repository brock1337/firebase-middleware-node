const router = require('express').Router();

// Create new Custom Token for User
router.get('/token/:id', (req, res) => {
  res.send(`Requesting Token --> ${req.params.id}`);
});

module.exports = router;
