import _ from 'lodash';
import * as admin from 'firebase-admin';
import config from '../../config';

const db = admin.database();

function getData (key) {
  const ref = db.ref('tokens/' + key);
  
  ref.on('value', snapshot => {
    console.log('Snapshot --> ', snapshot.val());
    return snapshot.val();
  }, err => {
    console.log('[ERROR]: ', err);
  });
}

function getToken (token) {
  return getData(token);
}

const database = {
  getToken
};

export default database;
