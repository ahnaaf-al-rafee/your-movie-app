import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3xLb2dWl1f_k6nKUSzyF6y9pvoW_FXXw",
  authDomain: "your-movie-list.firebaseapp.com",
  databaseURL: "https://your-movie-list.firebaseio.com",
  projectId: "your-movie-list",
  storageBucket: "your-movie-list.appspot.com",
  messagingSenderId: "483129254182",
  appId: "1:483129254182:web:34d06d2277d162c95a61e7",
  measurementId: "G-P1Q7ZMKYGF",
});

const db = firebaseApp.firestore();

export default db;
