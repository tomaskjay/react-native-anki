import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
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
    question,
    answer,
    nextReview: new Date(),
    easeFactor: 2.5,
    interval: 1,
    repetition: 0
  });
}

async function setupExample() {
  const userId = "user123";
  const deckId = "deck123";
  const cardId = "card123";

  await createUser(userId);
  await createDeck(userId, deckId, "My First Deck");
  await createFlashcard(userId, deckId, cardId, "What is Firestore?", "A NoSQL document database built for automatic scaling, high performance, and ease of application development.");
}

setupExample();