import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnAjeE9wgWvNHo_6Jl9ASgPvxAuOYihes",
  authDomain: "ecomr-388ff.firebaseapp.com",
  projectId: "ecomr-388ff",
  storageBucket: "ecomr-388ff.firebasestorage.app",
  messagingSenderId: "196544208199",
  appId: "1:196544208199:web:e8a77ab3943cae4fd74062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};