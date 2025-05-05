// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0VKq00cPoF6rdhURF-wZg01FqadihV50",
  authDomain: "prepwise-4261a.firebaseapp.com",
  projectId: "prepwise-4261a",
  storageBucket: "prepwise-4261a.firebasestorage.app",
  messagingSenderId: "70369065992",
  appId: "1:70369065992:web:b466d3c45b4ccd78e665bd",
  measurementId: "G-1VG7B8WN6F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);