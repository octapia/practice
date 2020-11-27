import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBaKOXx0OiVYicGw6yF7o6m0GVBNt3wEA0",
    authDomain: "messenger-clone-d5721.firebaseapp.com",
    databaseURL: "https://messenger-clone-d5721.firebaseio.com",
    projectId: "messenger-clone-d5721",
    storageBucket: "messenger-clone-d5721.appspot.com",
    messagingSenderId: "110664471019",
    appId: "1:110664471019:web:85d9ed78d38abc3c2cc9ae",
    measurementId: "G-796YTPMEYW"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();

 export default db;