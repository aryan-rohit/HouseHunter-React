// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDORnsJHe2PJzh_B9zh1c1vZrGXDDnViOU",
  authDomain: "house-hub-fb3e4.firebaseapp.com",
  projectId: "house-hub-fb3e4",
  storageBucket: "house-hub-fb3e4.appspot.com",
  messagingSenderId: "341719565413",
  appId: "1:341719565413:web:8ff4d8e0502286b707f28c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()