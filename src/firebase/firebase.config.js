// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU7DYOgq37QaeAV64ujcq-2e1Gy6rOS_I",
  authDomain: "dragon-news-project-ca0ef.firebaseapp.com",
  projectId: "dragon-news-project-ca0ef",
  storageBucket: "dragon-news-project-ca0ef.firebasestorage.app",
  messagingSenderId: "210019454063",
  appId: "1:210019454063:web:d069e1c6c2198798c8919a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app