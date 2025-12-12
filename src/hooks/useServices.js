// src/hooks/useServices.js
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const colRef = collection(db, "services");
      const snapshot = await getDocs(colRef);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(data);
    }
    fetchServices();
  }, []);

  return services;
}