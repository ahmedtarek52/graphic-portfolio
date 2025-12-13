// src/hooks/useCategories.js
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const colRef = collection(db, "categories");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategories(data);
        setError(null);
      } catch (err) {
        // console.error("Failed to fetch categories:", err);
        // Handle permission errors gracefully
        if (err.code === 'permission-denied') {
          // Silently handle permission errors - this is expected when not authenticated
          setCategories([]);
        } else {
          setError('An error occurred while loading categories.');
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchCategories();
  }, []);

  return { categories, loading, error };
}