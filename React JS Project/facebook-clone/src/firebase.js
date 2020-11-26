import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN31KiubYUwndbPf0nRdZ6OCaI_c4sJrw",
  authDomain: "facebook-clone-ad14c.firebaseapp.com",
  databaseURL: "https://facebook-clone-ad14c.firebaseio.com",
  projectId: "facebook-clone-ad14c",
  storageBucket: "facebook-clone-ad14c.appspot.com",
  messagingSenderId: "339281700043",
  appId: "1:339281700043:web:51a026b6dd5256ac00e74e",
  measurementId: "G-FS3VVQ8K83",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
