import { db } from "./config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";


/**
 * Get all services
 * @returns {Promise<Array>} Array of services with id
 */
export async function getServices() {
  try {
    const snapshot = await getDocs(collection(db, "services"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Failed to fetch services:", err);
    throw err;
  }
}

/**
 * Add a new service
 * @param {Object} data Service data
 * @returns {Promise} Added document reference
 */
export async function addService(data) {
  try {
    return await addDoc(collection(db, "services"), data);
  } catch (err) {
    console.error("Failed to add service:", err);
    throw err;
  }
}

/**
 * Update an existing service
 * @param {string} id Service document ID
 * @param {Object} data Updated data
 */
export async function updateService(id, data) {
  try {
    const ref = doc(db, "services", id);
    return await updateDoc(ref, data);
  } catch (err) {
    console.error("Failed to update service:", err);
    throw err;
  }
}

/**
 * Delete a service
 * @param {string} id Service document ID
 */
export async function deleteService(id) {
  try {
    const ref = doc(db, "services", id);
    return await deleteDoc(ref);
  } catch (err) {
    console.error("Failed to delete service:", err);
    throw err;
  }
}


// Get single service by ID
export async function getService(id) {
  try {
    const ref = doc(db, "services", id);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
      throw new Error("Service not found");
    }
    return { id: snapshot.id, ...snapshot.data() };
  } catch (err) {
    console.error("Failed to fetch service:", err);
    throw err;
  }
}