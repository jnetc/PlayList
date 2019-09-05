 // Initialize Firebase
 import firebase from 'firebase/app';
 import 'firebase/database'
 import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBnl6b0uF00-Ttma7d7KPJj7NtGIQvWtCg",
  authDomain: "playlist-e2d8d.firebaseapp.com",
  databaseURL: "https://playlist-e2d8d.firebaseio.com/",
  projectId: "playlist-e2d8d",
  storageBucket: "project-id.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(config);
// Get a reference to the database service
const database = firebase.database();

export { firebase, database as default }