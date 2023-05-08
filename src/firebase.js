// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvMJ736k8tUo-TvkEvNh8GmFzLtm__IJk",
  authDomain: "chat-app-yday.firebaseapp.com",
  projectId: "chat-app-yday",
  storageBucket: "chat-app-yday.appspot.com",
  messagingSenderId: "247648229711",
  appId: "1:247648229711:web:d2f6ad676832b1dda08d3a",
  measurementId: "G-9WC15B5TS0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();