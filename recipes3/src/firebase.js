import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChqFo-DPjWZsAasnbfVyTdMNyAcaU0G7I",
  authDomain: "recipes3-firebase.firebaseapp.com",
  projectId: "recipes3-firebase",
  storageBucket: "recipes3-firebase.appspot.com",
  messagingSenderId: "1027080500059",
  appId: "1:1027080500059:web:ca0ac1639c38e67396a07e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = async () => {
  await auth.signInWithPopup(new  firebase.auth.GoogleAuthProvider())
}