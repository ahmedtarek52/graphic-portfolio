import { db } from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Save contact form submission to Firestore
 * @param {Object} data - Contact form data
 * @returns {Promise} Firestore document reference
 */
export async function saveContactSubmission(data) {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef;
  } catch (error) {
    console.error("Error saving contact submission:", error);
    throw error;
  }
}