// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyCHB1UE72xyBKfp_bgPy4zEWKDHOPRlY",
    authDomain: "portfolio-909a5.firebaseapp.com",
    projectId: "portfolio-909a5",
    storageBucket: "portfolio-909a5.appspot.com",
    messagingSenderId: "779784358102",
    appId: "1:779784358102:web:2c9328925af396f896e177",
    measurementId: "G-JEPXVV4VLB"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);