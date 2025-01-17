import firebaseService from '../services/firebase';

const User = {
  handleGetUser: (req, res) => {
    res.send(firebaseService.getUser(req.params.id));
  }
};

export default User;
