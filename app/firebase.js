// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlsvVXfjg10F1D7FJEsbdi8B9Sr8K7ymw",
  authDomain: "quizzlord-d4b2a.firebaseapp.com",
  projectId: "quizzlord-d4b2a",
  storageBucket: "quizzlord-d4b2a.appspot.com",
  messagingSenderId: "154944880324",
  appId: "1:154944880324:web:8b48af6ac20bb9afc0d391",
  measurementId: "G-QTF2BJG0V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);