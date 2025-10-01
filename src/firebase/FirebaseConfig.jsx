import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Debug environment variables
console.log('Environment variables check:');
console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? 'Present' : 'Missing');
console.log('Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Present' : 'Missing');
console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Present' : 'Missing');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDnAjeE9wgWvNHo_6Jl9ASgPvxAuOYihes",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ecomr-388ff.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ecomr-388ff",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ecomr-388ff.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "196544208199",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:196544208199:web:e8a77ab3943cae4fd74062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};