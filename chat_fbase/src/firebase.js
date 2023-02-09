// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC81bWAB2cEjrjRBOUScrB4TMFvdgancp8",
  authDomain: "chat-app-4e78b.firebaseapp.com",
  projectId: "chat-app-4e78b",
  storageBucket: "chat-app-4e78b.appspot.com",
  messagingSenderId: "501325052169",
  appId: "1:501325052169:web:e81b67f22a5dab5e393bd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
