import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "car-master-check.firebaseapp.com",
  projectId: "car-master-check",
  storageBucket: "car-master-check.appspot.com",
  messagingSenderId: "342956847571",
  appId: "1:342956847571:web:90513153477c8e57a33f26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
