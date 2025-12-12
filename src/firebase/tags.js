import { db } from "./config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";


/**
 * Get all tags
 * @returns {Promise<Array>} Array of tags with id
 */
export async function getTags() {
  try {
    const snapshot = await getDocs(collection(db, "tags"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Failed to fetch tags:", err);
    throw err;
  }
}

/**
 * Add a new tag
 * @param {Object} data Tag data
 * @returns {Promise} Added document reference
 */
export async function addTag(data) {
  try {
    return await addDoc(collection(db, "tags"), data);
  } catch (err) {
    console.error("Failed to add tag:", err);
    throw err;
  }
}

/**
 * Update an existing tag
 * @param {string} id Tag document ID
 * @param {Object} data Updated data
 */
export async function updateTag(id, data) {
  try {
    const ref = doc(db, "tags", id);
    return await updateDoc(ref, data);
  } catch (err) {
    console.error("Failed to update tag:", err);
    throw err;
  }
}

/**
 * Delete a tag
 * @param {string} id Tag document ID
 */
export async function deleteTag(id) {
  try {
    const ref = doc(db, "tags", id);
    return await deleteDoc(ref);
  } catch (err) {
    console.error("Failed to delete tag:", err);
    throw err;
  }
}


// Get single tag by ID
export async function getTag(id) {
  try {
    const ref = doc(db, "tags", id);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
      throw new Error("Tag not found");
    }
    return { id: snapshot.id, ...snapshot.data() };
  } catch (err) {
    console.error("Failed to fetch tag:", err);
    throw err;
  }
}