const router = require('express').Router();
import { User } from '../../controllers';
import * as admin from 'firebase-admin';

// Create new user. Route: /api/v1/users/create
router.post('/create', (req, res) => {
  const { email, password, displayName } = req.body;
  
  // Create New User
  admin.auth().createUser({
    emailVerified: false,
    email,
    password,
    displayName
  })
  .then(userData => {
    res.send(userData.toJSON());
  })
  .catch(err => {
    console.log('\n!!! [ERROR]: Creating User --> ', err);
    res.send(err);
  });
});

// Route - /api/v1/users/:id
router.get('/:id', (req, res) => {
  User.handleGetUser(req, res);
});

// Delete User
router.delete('/:id', (req, res) => {
  admin.auth().deleteUser(req.params.id)
  .then(() => res.send(`Successfully deleted user: ${req.params.id}`))
  .catch(err => res.send(err));
});

module.exports = router;
