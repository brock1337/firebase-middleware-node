const router = require('express').Router();
import database from '../../services/firebase/database';

router.get('/', (req, res) => {
  res.send('Authentication Form');
});

// Create new Custom Token for User
router.get('/token/:id', (req, res) => {
  res.send(database.getToken(req.params.id));
});

module.exports = router;
