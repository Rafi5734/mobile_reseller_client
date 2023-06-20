// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyCa50jReviYjOaUSHLxo8TJJeoN18IgjcM",
  authDomain: "mobile-reseller-d2f92.firebaseapp.com",
  projectId: "mobile-reseller-d2f92",
  storageBucket: "mobile-reseller-d2f92.appspot.com",
  messagingSenderId: "120867421170",
  appId: "1:120867421170:web:9de7ee9d0f55b7a379496b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export default auth;
