// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYZFTWIfJsgwnAYsWdoVuZVVh2463SIrk",
  authDomain: "netflix-ai-d8689.firebaseapp.com",
  projectId: "netflix-ai-d8689",
  storageBucket: "netflix-ai-d8689.firebasestorage.app",
  messagingSenderId: "119716515307",
  appId: "1:119716515307:web:c95104fad0105dcb801dae",
  measurementId: "G-DJ3GF1RPW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();