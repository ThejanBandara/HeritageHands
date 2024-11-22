// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdqclS6p7nuHW-oZbf-4YjOGmcRoTGxUQ",
  authDomain: "web-store-test-7d303.firebaseapp.com",
  projectId: "web-store-test-7d303",
  storageBucket: "web-store-test-7d303.firebasestorage.app",
  messagingSenderId: "628803596044",
  appId: "1:628803596044:web:78399985439bc2ce7ee329"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

