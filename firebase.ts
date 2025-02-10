// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NI_2R-dgWw5F32SiS8PYAWrIdkSZtfc",
  authDomain: "react-native-anki.firebaseapp.com",
  projectId: "react-native-anki",
  storageBucket: "react-native-anki.firebasestorage.app",
  messagingSenderId: "954417309791",
  appId: "1:954417309791:web:9c04397642ddb6df6453ea",
  measurementId: "G-SYRXFH648N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);