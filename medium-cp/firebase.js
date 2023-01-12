// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx6yntHLnpqhP-v0H3UTkSXqu3zAouk_M",
  authDomain: "medium-cp-3ddde.firebaseapp.com",
  projectId: "medium-cp-3ddde",
  storageBucket: "medium-cp-3ddde.appspot.com",
  messagingSenderId: "77983157550",
  appId: "1:77983157550:web:2b821d857ddcca238b3ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
