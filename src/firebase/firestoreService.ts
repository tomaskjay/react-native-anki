import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7NI_2R-dgWw5F32SiS8PYAWrIdkSZtfc",
  authDomain: "react-native-anki.firebaseapp.com",
  projectId: "react-native-anki",
  storageBucket: "react-native-anki.firebasestorage.app",
  messagingSenderId: "954417309791",
  appId: "1:954417309791:web:9c04397642ddb6df6453ea",
  measurementId: "G-SYRXFH648N"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Function to create a user document
export async function createUser(userId: string) {
  const userRef = doc(firestore, `users/${userId}`);
  await setDoc(userRef, { createdAt: new Date() });
}

// Function to create a deck document
export async function createDeck(userId: string, deckId: string, title: string) {
  const deckRef = doc(firestore, `users/${userId}/decks/${deckId}`);
  await setDoc(deckRef, {
    title,
    createdAt: new Date()
  });
}

// Function to create a flashcard document
export async function createFlashcard(userId: string, deckId: string, cardId: string, question: string, answer: string) {
  const flashcardRef = doc(firestore, `users/${userId}/decks/${deckId}/flashcards/${cardId}`);
  await setDoc(flashcardRef, {
    front,
    back,
    nextReview: new Date(),
    easeFactor: 2.5,
    interval: 1,
    repetition: 0
  });
}