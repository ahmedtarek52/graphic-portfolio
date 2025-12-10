// src/hooks/useDocument.js
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useDocument(collectionName, id) {
  const [docData, setDocData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setDocData(null);
      setLoading(false);
      return;
    }
    const docRef = doc(db, collectionName, id);
    const unsub = onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        setDocData({ id: snap.id, ...snap.data() });
      } else {
        setDocData(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, [collectionName, id]);

  return { docData, loading };
}
