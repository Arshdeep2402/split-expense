// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4p6V4FhPC9qxgl0e60a7826Zh0JKlUh0",
  authDomain: "expsplitz.firebaseapp.com",
  projectId: "expsplitz",
  storageBucket: "expsplitz.appspot.com",
  messagingSenderId: "946423165623",
  appId: "1:946423165623:web:74159223aa16f7ec15d332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expenseRef = collection(db, 'expenses');

export default app;

