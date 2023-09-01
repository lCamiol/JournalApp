// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDShviGsSCeoYKTpiCfSpVKatn59QB3UmE",
  authDomain: "journalapps-cc6e5.firebaseapp.com",
  projectId: "journalapps-cc6e5",
  storageBucket: "journalapps-cc6e5.appspot.com",
  messagingSenderId: "327073133561",
  appId: "1:327073133561:web:08137832bdabfccf618328"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore (FirebaseApp);