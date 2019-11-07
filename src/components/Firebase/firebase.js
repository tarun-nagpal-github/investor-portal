
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var config = {
  apiKey: "AIzaSyDuiLmN4kin8v22S48vG9ca9PnJtu-IHXY",
  authDomain: "webmin-react.firebaseapp.com",
  databaseURL: "https://webmin-react.firebaseio.com",
  projectId: "webmin-react",
  storageBucket: "webmin-react.appspot.com",
  messagingSenderId: "885348037816",  
};
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
const db = firebase.database();

  const auth = firebase.auth();
export {
  db,
  auth,
};