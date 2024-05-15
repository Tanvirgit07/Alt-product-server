// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFnoXIdnqRDS5ZAecTy6S0a4CjMIT7phA",
  authDomain: "alternative-product-client.firebaseapp.com",
  projectId: "alternative-product-client",
  storageBucket: "alternative-product-client.appspot.com",
  messagingSenderId: "931941276789",
  appId: "1:931941276789:web:88a124444ccade0dc66c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);