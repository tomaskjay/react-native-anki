import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra || Constants.manifest?.extra || {};

const firebaseConfig = {
  apiKey: extra.REACT_APP_FIREBASE_API_KEY,
  authDomain: extra.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: extra.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: extra.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: extra.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: extra.REACT_APP_FIREBASE_APP_ID,
  measurementId: extra.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Remove analytics for React Native
export { app, auth, firestore };