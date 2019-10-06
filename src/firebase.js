import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDtyc3kF3EgrS2lDXtr_g30gWrKS-5FSdM",
    authDomain: "react-slack-af215.firebaseapp.com",
    databaseURL: "https://react-slack-af215.firebaseio.com",
    projectId: "react-slack-af215",
    storageBucket: "react-slack-af215.appspot.com",
    messagingSenderId: "542152543068",
    appId: "1:542152543068:web:79756a904e9d8855394f99",
    measurementId: "G-MWLCP0E39R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

  export default firebase;

