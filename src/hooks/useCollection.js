// src/hooks/useCollection.js
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

/**
 * useCollection(collectionName, options)
 * options: { orderBy: 'createdAt', direction: 'desc' }
 */
export default function useCollection(collectionName, options = {}) {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const colRef = collection(db, collectionName);
    const q = options.orderBy
      ? query(colRef, orderBy(options.orderBy, options.direction || "desc"))
      : colRef;

    const unsub = onSnapshot(q, (snap) => {
      const results = [];
      snap.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocs(results);
      setLoading(false);
    });

    return () => unsub();
  }, [collectionName, options.orderBy, options.direction]);

  return { docs, loading };
}
