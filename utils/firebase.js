
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDC9gIwU8QT3mrxH2wtq7NLT-kN-ybp2oQ",
    authDomain: "restaurants-6ddf0.firebaseapp.com",
    projectId: "restaurants-6ddf0",
    storageBucket: "restaurants-6ddf0.appspot.com",
    messagingSenderId: "419584195575",
    appId: "1:419584195575:web:2babe7c07d959a86874cf2"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    console.log("valor del login en firebase: ",user);
})