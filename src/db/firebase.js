import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD9TcQtsaDABAZeEgtIVCNIueVxw5FUHjs",
    authDomain: "firestore-dealers-kmx.firebaseapp.com",
    projectId: "firestore-dealers-kmx",
    storageBucket: "firestore-dealers-kmx.appspot.com",
    messagingSenderId: "481538376128",
    appId: "1:481538376128:web:aa1f9de162798861b94825"
  };

  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
 export const db = fb.firestore();