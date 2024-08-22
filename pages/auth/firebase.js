
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYXe9pwThBWkKLX7LdWdaymAdUNbYLfE",
  authDomain: "trinity2-2da10.firebaseapp.com",
  projectId: "trinity2-2da10",
  storageBucket: "trinity2-2da10.appspot.com",
  messagingSenderId: "491781503776",
  appId: "1:491781503776:web:6d3922b08b2886562d7545",
  measurementId: "G-6Z1FGTCMT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);