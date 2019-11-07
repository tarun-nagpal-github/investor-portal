import { db } from './firebase';

// User API

export const doCreateUser = ( id,firstname,lastname, email) =>
db.ref(`users/${id}`).set({
    firstname,
    lastname,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');
