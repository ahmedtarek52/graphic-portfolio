import { db } from "./config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";


/**
 * Get all categories
 * @returns {Promise<Array>} Array of categories with id
 */
export async function getCategories() {
  try {
    const snapshot = await getDocs(collection(db, "categories"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    // console.error("Failed to fetch categories:", err);
    throw err;
  }
}

/**
 * Add a new category
 * @param {Object} data { name, slug, icon, banner }
 * @returns {Promise} Added document reference
 */
export async function addCategory(data) {
  try {
    return await addDoc(collection(db, "categories"), data);
  } catch (err) {
    console.error("Failed to add category:", err);
    throw err;
  }
}

/**
 * Update an existing category
 * @param {string} id Category document ID
 * @param {Object} data Updated data
 */
export async function updateCategory(id, data) {
  try {
    const ref = doc(db, "categories", id);
    return await updateDoc(ref, data);
  } catch (err) {
    console.error("Failed to update category:", err);
    throw err;
  }
}

/**
 * Delete a category
 * @param {string} id Category document ID
 */
export async function deleteCategory(id) {
  try {
    const ref = doc(db, "categories", id);
    return await deleteDoc(ref);
  } catch (err) {
    console.error("Failed to delete category:", err);
    throw err;
  }
}



// Get single category by ID
export async function getCategory(id) {
  try {
    const ref = doc(db, "categories", id);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
      throw new Error("Category not found");
    }
    return { id: snapshot.id, ...snapshot.data() };
  } catch (err) {
    console.error("Failed to fetch category:", err);
    throw err;
  }
}
