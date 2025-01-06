// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH_1wds8Vi7v4aPqJs8m9A4GFlcuPkdzo",
  authDomain: "web-store-test-7d303.firebaseapp.com",
  projectId: "web-store-test-7d303",
  storageBucket: "web-store-test-7d303.firebasestorage.app",
  messagingSenderId: "628803596044",
  appId: "1:628803596044:web:3ca9dcb060a6aff37ee329"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

