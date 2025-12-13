// src/hooks/useServices.js
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        const colRef = collection(db, "services");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setServices(data);
        setError(null);
      } catch (err) {
        // console.error("Failed to fetch services:", err);
        // Handle permission errors gracefully
        if (err.code === 'permission-denied') {
          // Silently handle permission errors - this is expected when not authenticated
          setServices([]);
        } else {
          setError('An error occurred while loading services.');
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchServices();
  }, []);

  return { services, loading, error };
}