import _ from 'lodash';
import firebase from 'firebase';
import * as admin from 'firebase-admin';
import { getHttpInvoker } from './httpInvoker';

const invoker = getHttpInvoker();

const getUser = uid => {
  admin.auth().getUser(uid)
  .then(userData => {
    console.log('Successfully fetched user data: ', userData.toJSON());
    return userData.toJSON();
  })
  .catch(err => {
    console.log('Error fetching user data: ', err);
  });
};

const firebaseService = {
  getUser
};

export default firebaseService;
