// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwn4GRND5ZYPqFqWomqgiXagBHJ9zmls",
  authDomain: "chalet2025-b2596.firebaseapp.com",
  projectId: "chalet2025-b2596",
  storageBucket: "chalet2025-b2596.firebasestorage.app",
  messagingSenderId: "178363977966",
  appId: "1:178363977966:web:30e8ff54430b61aba523ff",
  measurementId: "G-WWGLDGWZSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);