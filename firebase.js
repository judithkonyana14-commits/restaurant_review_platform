// src/services/firebase.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzG9Hd4NCrWIdagejThD0XYcJGakvRKHM",
  authDomain: "review-platform-c14bc.firebaseapp.com",
  projectId: "review-platform-c14bc",
  storageBucket: "review-platform-c14bc.appspot.com", // fixed typo: .firebasestorage.app → .appspot.com
  messagingSenderId: "829220672719",
  appId: "1:829220672719:web:1c1692e426b0c1db4053ba",
  measurementId: "G-EZW8DJP90G"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services for use in your components
export { auth, db };
export default app;
