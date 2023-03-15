import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvMJ736k8tUo-TvkEvNh8GmFzLtm__IJk",
    authDomain: "chat-app-yday.firebaseapp.com",
    projectId: "chat-app-yday",
    storageBucket: "chat-app-yday.appspot.com",
    messagingSenderId: "247648229711",
    appId: "1:247648229711:web:d2f6ad676832b1dda08d3a",
    measurementId: "G-9WC15B5TS0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();