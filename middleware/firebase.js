import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDKmoA8x-PVi543sDO_y78tsCmLXshfMW4",
  authDomain: "trinity-6b083.firebaseapp.com",
  projectId: "trinity-6b083",
  storageBucket: "trinity-6b083.appspot.com",
  messagingSenderId: "874644072460",
  appId: "1:874644072460:web:16d55220dee92f04412629",
  measurementId: "G-N6CPCGSE4K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};