// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase web app's configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAy2gkMBRYiALBRIOQonyipuvmixjIGqUo",
  authDomain: "remtrinity-ffcf4.firebaseapp.com",
  projectId: "remtrinity-ffcf4",
  storageBucket: "remtrinity-ffcf4.appspot.com",
  messagingSenderId: "527226849727",
  appId: "1:527226849727:web:5c477a272364ff16f3b90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
