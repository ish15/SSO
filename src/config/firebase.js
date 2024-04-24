
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJgnyQKlIXF0RQLgQaZWs517GRYRmm2ew",
  authDomain: "cloudlab-2615f.firebaseapp.com",
  projectId: "cloudlab-2615f",
  storageBucket: "cloudlab-2615f.appspot.com",
  messagingSenderId: "876825259650",
  appId: "1:876825259650:web:4ff44528e8378b59dd8e9b",
  measurementId: "G-CDFTB61RQL"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider(); 

export { auth, db, googleAuthProvider }; 

