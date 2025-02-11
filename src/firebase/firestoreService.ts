import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export async function createUser(userId: string) {
  try {
    const userRef = doc(firestore, `users/${userId}`);
    await setDoc(userRef, { createdAt: new Date() });
    console.log(`User created with ID: ${userId}`);
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
    console.log(`Deck created with ID: ${deckId} for user: ${userId}`);
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
    console.log(`Flashcard created with ID: ${cardId} in deck: ${deckId} for user: ${userId}`);
  } catch (error) {
    console.error("Error creating flashcard:", error);
  }
}

// export async function setupExample() {
//   const userId = "user123";
//   const deckId = "deck123";
//   const cardId = "card123";

//   console.log("Creating user...");
//   await createUser(userId);
//   console.log("Creating deck...");
//   await createDeck(userId, deckId, "My First Deck");
//   console.log("Creating flashcard...");
//   await createFlashcard(userId, deckId, cardId, "What is Firestore?", "A NoSQL document database built for automatic scaling, high performance, and ease of application development.");
//   console.log("Setup example completed.");
// }