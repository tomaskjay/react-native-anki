import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";

dotenv.config();

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

async function testFirebase() {
  try {
    const testDocRef = doc(firestore, "test/testDoc");
    await setDoc(testDocRef, { test: "testValue" });
    console.log("Firebase configuration is correct. Test document created.");
  } catch (error) {
    console.error("Error testing Firebase configuration:", error);
  }
}

testFirebase();

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export async function createUser(userId: string) {
  try {
    const userRef = doc(firestore, `users/${userId}`);
    await setDoc(userRef, { createdAt: new Date() });
    console.log("User created.");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function createDeck(userId: string, deckId: string, title: string) {
  try {
    const deckRef = doc(firestore, `users/${userId}/decks/${deckId}`);
    await setDoc(deckRef, {
      title,
      createdAt: new Date()
    });
    console.log("Deck created.");
  } catch (error) {
    console.error("Error creating deck:", error);
  }
}

export async function createFlashcard(userId: string, deckId: string, cardId: string, question: string, answer: string) {
  try {
    const flashcardRef = doc(firestore, `users/${userId}/decks/${deckId}/flashcards/${cardId}`);
    await setDoc(flashcardRef, {
      question,
      answer,
      nextReview: new Date(),
      easeFactor: 2.5,
      interval: 1,
      repetition: 0
    });
    console.log("Flashcard created.");
  } catch (error) {
    console.error("Error creating flashcard:", error);
  }
}

async function setupExample() {
  const userId = "user123";
  const deckId = "deck123";
  const cardId = "card123";

  console.log("Creating user...");
  await createUser(userId);
  console.log("Creating deck...");
  await createDeck(userId, deckId, "My First Deck");
  console.log("Creating flashcard...");
  await createFlashcard(userId, deckId, cardId, "What is Firestore?", "A NoSQL document database built for automatic scaling, high performance, and ease of application development.");
}

setupExample();