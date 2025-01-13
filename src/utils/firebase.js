// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixai-a37a8.firebaseapp.com",
  projectId: "netflixai-a37a8",
  storageBucket: "netflixai-a37a8.firebasestorage.app",
  messagingSenderId: "1017921074923",
  appId: "1:1017921074923:web:533ffaa5ea9aafbaeab0ae",
  measurementId: "G-8CWVYTZF2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();