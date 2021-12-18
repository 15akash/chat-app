import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKtmndbFw1w_s7gt363kfC-VuMbfqRjtM",
  authDomain: "chat-app-7171c.firebaseapp.com",
  projectId: "chat-app-7171c",
  storageBucket: "chat-app-7171c.appspot.com",
  messagingSenderId: "196613360526",
  appId: "1:196613360526:web:f0442025778bf9bb5572df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
