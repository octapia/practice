import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBS09RLZ0uEnTLKGmQdWfqa-pdR73iShmU",
  authDomain: "todo-app-3d848.firebaseapp.com",
  databaseURL: "https://todo-app-3d848.firebaseio.com",
  projectId: "todo-app-3d848",
  storageBucket: "todo-app-3d848.appspot.com",
  messagingSenderId: "428217656415",
  appId: "1:428217656415:web:6f096353609f44dbcf67ea",
  measurementId: "G-NSPHVTBJ0E"
})
const db = firebaseApp.firestore();

export default db;