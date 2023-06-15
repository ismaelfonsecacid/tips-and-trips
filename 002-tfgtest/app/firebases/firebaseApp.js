// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lyHPZGdNWpZteSCcYF5jT_CYbvzownQ",
  authDomain: "trips-and-trips.firebaseapp.com",
  databaseURL: "https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trips-and-trips",
  storageBucket: "trips-and-trips.appspot.com",
  messagingSenderId: "703763533777",
  appId: "1:703763533777:web:3cb0e95d2c8934c1da1af0",
  measurementId: "G-7RL2XB2GJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
