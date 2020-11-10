import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBFp_F0y5i7Nua1s5PA6fUZT0ZICScwlQ0',
  authDomain: 'vdes-test.firebaseapp.com',
  databaseURL: 'https://vdes-test.firebaseio.com',
  projectId: 'vdes-test',
  storageBucket: 'vdes-test.appspot.com',
  messagingSenderId: '1056319534155',
  appId: '1:1056319534155:web:f5fc86887d5486ce5209ce',
  measurementId: 'G-E66GTZ96VE'
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.error(err);
}

const fire = firebase;

export default fire;
